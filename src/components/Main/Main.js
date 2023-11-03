import { FoodCard } from "./FoodCard";
import { useSelector } from "react-redux";

import classNames from "classnames/bind";
import styles from "./Main.module.scss";
import { foodsRemainingSelector, userSelector } from "~/redux/selectors";
const cx = classNames.bind(styles);

function Main({ fav = false }) {
  let foods = useSelector(foodsRemainingSelector);
  const user = useSelector(userSelector);
  if (fav) {
    foods = foods.filter((food) => user.liked.includes(food.id));
  }
  console.log("[FOODS]", foods);
  return (
    <div className={cx("wrapper")}>
      {foods && foods.map((food) => <FoodCard key={food.id} food={food} />)}
      {(!foods || foods.length === 0) && (
        <h1 className={cx("no-results")}>Không có món ăn phù hợp &#128531;</h1>
      )}
    </div>
  );
}

export default Main;
