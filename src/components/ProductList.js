import StarRating from "./StarRating";

function ProductList(props) {
  const {
    thumbnail,
    title,
    price,
    rating,
    description,
    category,
    stock,
    discountPercentage,
  } = props;

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={thumbnail} />
      </div>
      <div className='card-content'>
        <span className='card-category'>{category}</span>
        <span className='card-title'>{title}</span>
        <p>{description}</p>
      </div>
      <StarRating rating={rating} />
      <div className='card-action'>
        <span className={`${discountPercentage >= 15 ? "price-red" : "price"}`}>
          {price} (-{discountPercentage}%)
        </span>
        {stock === 0 ? (
          <button disabled className='btn'>
            buy ({stock})
          </button>
        ) : (
          <button className='btn'>buy ({stock})</button>
        )}
      </div>
    </div>
  );
}

export default ProductList;
