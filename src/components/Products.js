import ProductList from "./ProductList";

function Products(props) {
  const { product = [] } = props;
  return (
    <div className='products'>
      {product.length ? (
        product.map((product) => {
          return <ProductList key={product.id} {...product} />;
        })
      ) : (
        <h3>Nothing found</h3>
      )}
    </div>
  );
}

export default Products;
