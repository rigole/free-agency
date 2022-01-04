import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`
const QuestionContent = styled.span`
  margin: 30px;
`
const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
      color: black;
    }
   & a:first-of-type{
    margin-right: 20px;
  }
  
`



function Survey() {

    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt +1
    const [isDataLoading, setDataLoading] = useState(false)
    const [surveyData, setSurveyData] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchSurvey(){
            setDataLoading(true)
            try{
                const response = await fetch(`http://localhost:8080/survey`)
                const { surveyData } = await response.json()
                setSurveyData(true)
            } catch (error){
                console.log('===== Error =====', error)
                setError(true)
            } finally {
                setDataLoading(false)
            }
        }
        fetchSurvey()
    }, [])

    if (error){
        return <span>Oups il y a eu un problème</span>
    }

    return(
        <div>
            <h1>Questionnaire</h1>
            <h2 >Question {questionNumber}</h2>
            <Link to={`/survey/${prevQuestionNumber}`}>Precedent</Link>
            {questionNumberInt === 10 ? (
                <Link to="/results">Resultats</Link>
            ) : (
                <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
            )}

        </div>
    )
}

export default Survey