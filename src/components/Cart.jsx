import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

export function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Seu Carrinho</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} (x{item.quantity}) - R$ {item.price}
          </span>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remover
          </button>
        </div>
      ))}
      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}
