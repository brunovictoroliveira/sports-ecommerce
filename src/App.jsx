import "./App.css";
import Header from "./components/header/Header.jsx";
import ProductList from "./components/products/ProductList.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
