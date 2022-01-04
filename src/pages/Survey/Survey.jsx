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

    useEffect(() => {
        setDataLoading(true)
        fetch('http://localhost:8000/')
            .then((response) => response.json())
                .then(({ surveyData}) => console.log(surveyData))
                .catch((error) => console.log(error))
            )
    },[])

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