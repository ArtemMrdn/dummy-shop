import { useState, useEffect } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "products.json";
    fetch(url)
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Products products={products} />
      <Footer />
    </div>
  );
}

export default App;
