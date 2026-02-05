import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  allProduits,
  findProduitParcategory,
} from "../redux/products/selectors";
import { addToCart } from "../redux/cart/slices/cartslice";
import { useEffect, useState } from "react";
import { fetchproducts } from "../redux/products/asyncactions";

function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);
  const [categorie, setCategorie] = useState(null);

  const products = useSelector(allProduits);

  const filtredproducts = useSelector((state) =>
    categorie ? findProduitParcategory(state, categorie) : products,
  );
  const handleChange = (e) => {
    setCategorie(e.target.value);
  };
  const error = useSelector((state) => state.products.error);
  const state = useSelector((state) => state.products.status);

  if (state=="loading") {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container">
      <select onChange={handleChange}>
        <option value="">All</option>
        <option value="furniture">furniture</option>
        <option value="fragrances">fragrances</option>
        <option value="beauty">beauty</option>
        <option value="groceries">groceries</option>
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
