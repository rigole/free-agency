import { Link } from "react-router-dom";


function Header() {

    return(
        <nav>
            <Link to="/">Acceuil</Link>
            <Link to="/survey/42">Questionaire</Link>
            <Link to="/freelance">Freelances</Link>
        </nav>
    )
}
export default Header