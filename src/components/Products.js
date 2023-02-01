import ProductItem from "./ProductItem";

function Products(props) {
  const { products = [] } = props;
  return (
    <main className='main'>
      <div className='main-content'>
        {products.length > 0 ? (
          products.map((products) => {
            return <ProductItem key={products.id} {...products} />;
          })
        ) : (
          <h3>Nothing found</h3>
        )}
      </div>
    </main>
  );
}

export default Products;
