import { useContext } from "react";
import { SurveyContext } from "../../utils/context";
import styled from "styled-components";
import colors from '../../utils/style/colors'
import { useFetch, useTheme } from "../../utils/hooks";
import { StyledLink, Loader } from "../../utils/Atoms";


const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`


const DescriptionWrapper = styled.div`
  padding: 60px;
`

const JobTitle = styled.span`
  color: ${({ theme }) => 
          theme === 'light' ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
  }
  
  & > span {
    font-size: 20px;
  }
  
`


const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function formatFetchParams(answers) {
    const answersNumbers = Object.keys(answers)

    return answersNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstParam = index === 0
        const separator = isFirstParam ? '' : '&'
        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
    }, '')
}

function Results() {
    const { theme } = useTheme()
    const { answers } = useContext(SurveyContext)
    const fetchParams = formatFetchParams(answers)

    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/results?${fetchParams}`
    )
    if (error) {
        return <span>Il y a problème</span>
    }

    const resultsData = data?.resultsData

    return isLoading ? (
       <LoaderWrapper>
           <Loader/>
       </LoaderWrapper>
    ) : (
        <ResultsContainer theme={theme}>
            <ResultsTitle theme={theme}>
                Les Compétences dont vous avez besoin:
            </ResultsTitle>

        </ResultsContainer>
    )
}

export default Results