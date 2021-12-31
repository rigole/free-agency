import { useParams } from "react-router-dom";

function Survey() {

    const { questionNumber } = useParams()
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