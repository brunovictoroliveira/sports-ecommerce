import Header from "./components/Header/Header";
import ProductList from "./components/products/ProductList"; // Ajuste o caminho conforme sua pasta
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <ProductList />
      </main>
    </>
  );
}

export default App;