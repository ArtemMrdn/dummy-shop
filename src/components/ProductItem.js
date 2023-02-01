import StarRating from "./StarRating";

function ProductItem(props) {
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
        <img src={thumbnail} alt='Card' />
      </div>
      <div className='card-content'>
        <span className='card-category'>{category}</span>
        <span className='card-title'>{title}</span>
        <p>{description}</p>
      </div>
      <StarRating rating={rating} />
      <div className='card-action'>
        <div className={`${discountPercentage >= 15 ? "price-red" : "price"}`}>
          {price}
          <span className='percentage'>(-{discountPercentage}%)</span>
        </div>
        <button disabled={stock === 0} className='btn'>
          buy ({stock})
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
