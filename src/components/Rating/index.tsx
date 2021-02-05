import React from "react";
import style from "./rating.module.scss";
const Rating = ({ rating }) => {
  return (
    <div className={style.star}>
      <span style={{ width: `${rating * 20}%` }}></span>
    </div>
  );
};

export default Rating;
