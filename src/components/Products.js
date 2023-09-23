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

for (let i = 1; i <= 5; i++) {
  document.getElementById(
    "w__stars"
  ).innerHTML += `<span class="r__icon">[ ]</span>`;
}
var icon = document.getElementsByClassName("r__icon");

for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", function (e) {
    console.log("--");
    for (let j = 0; j < i + 1; j++) {
      console.log("i: " + i);
      console.log("j: " + (j + 1));
      console.log("Rest: " + (j + (5 - (i + 1))));
      icon[j].innerHTML = `[X]`;
      icon[i + (5 - (i + 1))].innerHTML = `[ ]`;
    }
  });
}
