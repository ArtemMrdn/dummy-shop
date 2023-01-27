import { useState, useEffect } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <Products product={product} />
      <Footer />
    </div>
  );
}

export default App;
