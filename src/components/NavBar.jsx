import { Link} from "react-router-dom"

function NavBar() {
    return(
        <nav>
            <ul>
                <li><Link to={"/"}>Tous Les Produits</Link></li>
                <li><Link to={"/cart"}>Panier</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar