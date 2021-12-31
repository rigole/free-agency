import { useParams } from "react-router-dom";

function Survey() {

    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt +1
    return(
        <div>
            <h1>Questionnaire</h1>
            <h2>Question {questionNumber}</h2>
            <h2>Precedent</h2>
            <h2>Suivant</h2>
        </div>
    )
}

export default Survey