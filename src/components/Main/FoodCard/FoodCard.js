import classNames from "classnames/bind";
import styles from "./FoodCard.module.scss";
import { useNavigate } from "react-router-dom";
import React, { useRef, useEffect } from "react";

const cx = classNames.bind(styles);

function FoodCard({ food }) {
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate(`/food/${food.id}`, { state: { foodData: food } });
  };

  const tagRef = useRef();

  useEffect(() => {
    if (tagRef.current) {
      if (food.diet === "Chế độ ăn thường") {
        tagRef.current.style.backgroundColor = "#ff524b";
      } else if (food.diet === "Chế độ ăn chay") {
        tagRef.current.style.backgroundColor = "#00b66d";
      } else if (food.diet === "Chế độ ăn kiêng") {
        tagRef.current.style.backgroundColor = "#b1a289";
      } else {
        tagRef.current.style.backgroundColor = "#6076a1";
      }
    }
  }, []);

  return (
    <div className={cx("wrapper", food.diet)}>
      <img className={cx("food-img")} src={food.image} alt="" />
      <div className={cx("overlay")}>
        <div className={cx("tag")} ref={tagRef}></div>
        <div className={cx("container")}>
          <h4 className={cx("diet")}>{food.diet}</h4>
          <h1 className={cx("name")}>{food.name}</h1>
          <p className={cx("food-like")}>
            <span>・</span>
            {food.userLiked.length} lượt thích
          </p>

          <button onClick={handleReadMore}>Xem thêm</button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
