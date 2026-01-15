import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import styles from "./ProductList.module.css";
import Card from "./Card";
import { setProducts } from "../../features/products/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  // 1. Buscamos a lista de produtos que está no estado global do Redux
  const products = useSelector((state) => state.products.items);

  // 2. Buscamos os dados do json-server quando o componente monta
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data)))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {/* 3. Mapeamos o array de produtos para renderizar um componente Card para cada um */}
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
