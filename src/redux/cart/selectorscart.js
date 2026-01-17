export function selectTotal(cart) {
  return cart.items.reduce(
    (acc, item) => acc + item.price * item.quantite,
    0
  );
}