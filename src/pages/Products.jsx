import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { allProduits, findProduitParcategory } from "../redux/products/slices/productslice";
import { addToCart } from "../redux/cart/slices/cartslice";
import { useState } from "react";

function Products() {

    const dispatch = useDispatch();

    
    const [categorie, setCategorie] = useState(null);

    const products = useSelector(allProduits);

    const filtredproducts = useSelector(state =>
        categorie ? findProduitParcategory(state, categorie) : products
    );

    const handleChange = (e) => {
        setCategorie(e.target.value);
    };

    return (
        <div className="container">
            <select onChange={handleChange}>
                <option value="">All</option>
                <option value="electronics">electronics</option>
                <option value="fragrances">fragrances</option>
                <option value="beauty">beauty</option>
            </select>

            <h1>Tous Les Produits</h1>

            <div className="products-grid">
                {filtredproducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.thumbnail} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p className="price">{product.price} €</p>

                        <Link to={`/products/${product.id}`} className="detail">
                            Voir détails
                        </Link>

                        <button onClick={() => dispatch(addToCart(product))}>
                            Ajouter au panier
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Products;