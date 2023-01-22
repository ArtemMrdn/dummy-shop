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
      <div className='content card-content'>
        <span className='card-category' style={{ fontWeight: "bold" }}>
          {category}
        </span>
        <span className='card-title'>{title}</span>
        <p>{description}</p>
      </div>
      <StarRating stars={rating} />
      <div className='card-action'>
        <span className='price red-text'>
          {price} (-{discountPercentage}%)
        </span>
        <button className='btn'>buy ({stock})</button>
      </div>
    </div>
  );
}

export default ProductList;
