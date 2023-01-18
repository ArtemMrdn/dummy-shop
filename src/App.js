import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const url = "products.json";
    fetch(url)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <div className='App'>
      <Header />
      <ProductList product={product} />
    </div>
  );
}

export default App;
