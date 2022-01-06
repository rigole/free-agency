import logo from  '../../logo.svg'
import Card from "../../components/Card";
import styled from "styled-components";
//import {useEffect, useState} from "react";
import { Loader } from "../../utils/Atoms";
import colors from "../../utils/style/colors";
import { useFetch, useTheme } from "../../utils/hooks";

const freelanceProfiles =  [
    {
        name: 'Zuckerberg',
        jobTitle: 'DevOps',
        picture: logo,
    },
    {
        name: 'Jack Ma',
        jobTitle: 'Entrepreneur',
        picture: logo,
    },
    {
        name: 'Placide FOLEU',
        jobTitle: 'Developpeur Fullstack',
        picture: logo,
    },
]


// TODO : customize error page

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-auto-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
    font-size: 30px;
    color: ${({theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    text-align: center;
    padding-bottom: 30px;
`
const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
    display: flex;
  justify-content: center;
  `

function Freelances() {

    /*const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)
    */

    const { theme } = useTheme()
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/freelances`
    )
    const freelancersList = data?.freelancersList

    if (error){
        return  <span>Il ya erreur</span>
    }
    return(
        <div>
           <PageTitle theme={theme}>Trouver un Freelance</PageTitle>
            <PageSubtitle theme={theme}>
                Chew nous les meilleurs prestataires au meilleur prix
            </PageSubtitle>
            { isLoading ? (
                <LoaderWrapper>
                    <Loader theme={theme}/>
                </LoaderWrapper>
            ) :(
            <CardsContainer>
                {freelancersList.map((profile, index) =>(
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
            )}
        </div>

    )
}



export default Freelances