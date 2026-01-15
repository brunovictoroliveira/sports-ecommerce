import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value); // Acessa o valor no store
  const dispatch = useDispatch(); // Função para disparar ações

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Contador: {count}</h2>
      <button onClick={() => dispatch(increment())}>Aumentar</button>
      <button onClick={() => dispatch(decrement())}>Diminuir</button>
    </div>
  );
}
