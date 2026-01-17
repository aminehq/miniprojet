import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
    const cart = useSelector((state) => state.cart.items);
    const cartCount = cart.reduce((acc, item) => acc + item.quantite, 0);

    return (
        <nav>
            <div className="logo">
                <Link to="/">My Shop</Link>
            </div>
            <ul>
                <li><Link to="/">Tous Les Produits</Link></li>
                <li>
                    <Link to="/cart">
                        Panier ({cartCount})
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;