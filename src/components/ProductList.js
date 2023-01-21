function ProductList(props) {
  const {
    id,
    thumbnail,
    title,
    price,
    rating,
    brand,
    description,
    category,
    stock,
  } = props;

  return (
    <div className='card'>
      <div className='img card-image'>
        <img src={thumbnail} />
      </div>
      <div className='card-content'>
        <span className='card-category'>{category}</span>
        <span className='card-title'>{title}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button class='btn'>buy</button>
      </div>
    </div>
  );
}

export default ProductList;
