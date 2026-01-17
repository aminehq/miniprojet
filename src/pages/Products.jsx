import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { allProduits } from "../redux/products/selectors";
import { addToCart } from "../redux/cart/actions";

function Products() {
    const products = useSelector((state) => allProduits(state.products));
    const dispatch = useDispatch();

    return (
        <div className="container">
            <h1>Tous Les Produits</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.thumbnail} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p className="price">{product.price} €</p>
                        <Link to={`/products/${product.id}`} className="detail">Voir détails</Link>
                        <button onClick={() => dispatch(addToCart(product))}>
                            Ajouter au panier
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Products;