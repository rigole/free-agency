import { Link } from "react-router-dom";


function Header() {

    return(
        <nav>
            <Link to="/">Acceuil</Link>
            <Link to="/survey/42">Questionaire</Link>
        </nav>
    )
}
export default Header