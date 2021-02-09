import React from "react";
import style from "./rating.module.scss";
const Rating = ({ rating, className = "", showRating = false }) => {
  return (
    <>
      {showRating && <span className={style.rating}> Rating: {rating} </span>}
      <div className={`${style.star} ${className}`}>
        <span style={{ width: `${rating * 20}%` }}></span>
      </div>
    </>
  );
};

export default Rating;
