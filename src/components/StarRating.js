import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const StarRating = ({ rating }) => {
  const RatingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <BsStarFill className='icon' />
        ) : rating >= number ? (
          <BsStarHalf className='icon' />
        ) : (
          <BsStar className='icon' />
        )}
      </span>
    );
  });
  return (
    <div className='stars'>
      <div>{RatingStar}</div>
    </div>
  );
};

export default StarRating;
