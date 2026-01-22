import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allProduits } from "../redux/products/slices/productslice";
import { addToCart } from "../redux/cart/slices/cartslice";

function ProductDetail() {
    const { id } = useParams();
    const products = useSelector(allProduits);
    const product = products.find((p) => p.id === parseInt(id));
    const dispatch = useDispatch();

    if (!product) {
        return <div className="container">Produit non trouvé</div>;
    }

    return (
        <div className="container">
            <div className="product-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
                <img src={product.thumbnail} alt={product.title} style={{ height: '300px' }} />
                <h1>{product.title}</h1>
                <p className="price">{product.price} €</p>
                <p><strong>Catégorie:</strong> {product.category}</p>
                <p>{product.description}</p>
                <p><strong>Stock:</strong> {product.stock}</p>
                <button onClick={() => dispatch(addToCart(product))}>
                    Ajouter au panier
                </button>
            </div>
        </div>
    );
}

export default ProductDetail;