import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const StarRating = ({ stars }) => {
  const RatingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className='icon' />
        ) : stars >= number ? (
          <FaStarHalfAlt className='icon' />
        ) : (
          <AiOutlineStar className='icon' />
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
