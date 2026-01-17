import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cart/actions";
import { selectTotal } from "../redux/cart/selectorscart";

function Cart() {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const total = useSelector((state) => selectTotal(state.cart));

    if (cart.length === 0) {
        return <div className="container"><h1>Votre panier est vide</h1></div>;
    }

    return (
        <div className="container">
            <h1>Votre Panier</h1>
            <div className="cart-list">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <img src={item.thumbnail} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                            <div>
                                <h3>{item.title}</h3>
                                <p>Prix unitaire: {item.price} €</p>
                                <p>Quantité: {item.quantite}</p>
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p style={{ fontWeight: 'bold' }}>{item.quantite*item.price} €</p>
                            <button
                                className="danger"
                                onClick={() => dispatch(removeFromCart(item.id))}
                            >
                                Retirer
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <p>Grand Total: {total} €</p>
                <button className="danger" onClick={() => dispatch(clearCart())}>
                    Vider le panier
                </button>
            </div>
        </div>
    );
}

export default Cart;