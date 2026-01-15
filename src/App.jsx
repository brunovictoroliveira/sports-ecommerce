import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Products from "./components/products/Products.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <Products />
    </div>
  );
}

export default App;
