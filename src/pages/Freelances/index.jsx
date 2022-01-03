import logo from  '../../logo.svg'
import Card from "../../components/Card";
import styled from "styled-components";

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




function Freelances() {
    return(
        <div>
            <h1>Freelances</h1>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) =>(
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </div>
    )
}

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-auto-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  `
export default Freelances