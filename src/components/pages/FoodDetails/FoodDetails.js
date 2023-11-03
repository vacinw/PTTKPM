import classNames from "classnames/bind";
import styles from "./FoodDetails.module.scss";
import { useLocation } from "react-router-dom";
import { Header } from "~/components/Header";
import { Sidebar } from "~/components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireFlameCurved,
  faHeart,
  faStopwatch,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userSelector } from "~/redux/selectors";
import { toggleFoodLike } from "~/components/Main/foodsSlice";
import { toggleUserLike } from "../forms/usersSlice";
import { ChatBox } from "~/components/ChatBox";

const cx = classNames.bind(styles);

function FoodDetails() {
  const location = useLocation();
  const foodData = location.state?.foodData;

  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const [like, setLike] = useState(
    foodData.userLiked.includes(user.id) ? "like" : "no-like"
  );

  const hanldeToggleLike = () => {
    if (!user.isLoggedIn) {
      alert("Ban phai dang nhap de like");
      return;
    }
    if (like === "like") {
      setLike("no-like");
      dispatch(
        toggleFoodLike({
          ...foodData,
          userLiked: foodData.userLiked.filter((userId) => userId !== user.id),
        })
      );

      dispatch(
        toggleUserLike({
          id: user.id,
          username: user.username,
          password: user.password,
          diet: user.diet,
          liked: user.liked.filter((foodId) => foodId !== foodData.id),
        })
      );
    } else {
      setLike("like");
      dispatch(
        toggleFoodLike({
          ...foodData,
          userLiked: [...foodData.userLiked, user.id],
        })
      );
      dispatch(
        toggleUserLike({
          id: user.id,
          username: user.username,
          password: user.password,
          diet: user.diet,
          liked: [...user.liked, foodData.id],
        })
      );
    }
  };
  // console.log(foodData);
  return (
    <div className={cx("wrapper")}>
      <Header search={false} filter={false} />
      <Sidebar />
      <ChatBox />
      <div className={cx("main")}>
        <div className={cx("content")}>
          <div className={cx("left")}>
            <img className={cx("food-img")} src={foodData.image} alt="" />
            <h1 className={cx("name")}>{foodData.name}</h1>
            <p className={cx("food-like")}>
              <FontAwesomeIcon
                className={cx("icon", like)}
                icon={faHeart}
                onClick={hanldeToggleLike}
              />
              <span>・</span>
              {foodData.userLiked.length} lượt thích
            </p>
            <div className={cx("jump")}>
              <a
                className={cx("jump-btn")}
                href="#recipepart"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#recipepart");
                  element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <svg
                  viewBox="0 0 384 512"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"></path>
                </svg>
                Chuyển đến Công Thức
              </a>
              <button className={cx("print-btn")} onClick={() => {}}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 19 18"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path d="M5 7.2C4.822 7.2 4.64799 7.25278 4.49999 7.35168C4.35198 7.45057 4.23663 7.59113 4.16851 7.75558C4.10039 7.92004 4.08257 8.101 4.11729 8.27558C4.15202 8.45016 4.23774 8.61053 4.3636 8.7364C4.48947 8.86226 4.64984 8.94798 4.82442 8.98271C4.999 9.01743 5.17996 8.99961 5.34441 8.93149C5.50887 8.86337 5.64943 8.74802 5.74832 8.60001C5.84722 8.45201 5.9 8.278 5.9 8.1C5.9 7.8613 5.80518 7.63239 5.6364 7.4636C5.46761 7.29482 5.23869 7.2 5 7.2ZM15.8 3.6H14.9V0.9C14.9 0.661305 14.8052 0.432387 14.6364 0.263604C14.4676 0.0948211 14.2387 0 14 0H5C4.76131 0 4.53239 0.0948211 4.3636 0.263604C4.19482 0.432387 4.1 0.661305 4.1 0.9V3.6H3.2C2.48392 3.6 1.79716 3.88446 1.29081 4.39081C0.784464 4.89716 0.5 5.58392 0.5 6.3V11.7C0.5 12.4161 0.784464 13.1028 1.29081 13.6092C1.79716 14.1155 2.48392 14.4 3.2 14.4H4.1V17.1C4.1 17.3387 4.19482 17.5676 4.3636 17.7364C4.53239 17.9052 4.76131 18 5 18H14C14.2387 18 14.4676 17.9052 14.6364 17.7364C14.8052 17.5676 14.9 17.3387 14.9 17.1V14.4H15.8C16.5161 14.4 17.2028 14.1155 17.7092 13.6092C18.2155 13.1028 18.5 12.4161 18.5 11.7V6.3C18.5 5.58392 18.2155 4.89716 17.7092 4.39081C17.2028 3.88446 16.5161 3.6 15.8 3.6ZM5.9 1.8H13.1V3.6H5.9V1.8ZM13.1 16.2H5.9V12.6H13.1V16.2ZM16.7 11.7C16.7 11.9387 16.6052 12.1676 16.4364 12.3364C16.2676 12.5052 16.0387 12.6 15.8 12.6H14.9V11.7C14.9 11.4613 14.8052 11.2324 14.6364 11.0636C14.4676 10.8948 14.2387 10.8 14 10.8H5C4.76131 10.8 4.53239 10.8948 4.3636 11.0636C4.19482 11.2324 4.1 11.4613 4.1 11.7V12.6H3.2C2.9613 12.6 2.73239 12.5052 2.5636 12.3364C2.39482 12.1676 2.3 11.9387 2.3 11.7V6.3C2.3 6.0613 2.39482 5.83239 2.5636 5.6636C2.73239 5.49482 2.9613 5.4 3.2 5.4H15.8C16.0387 5.4 16.2676 5.49482 16.4364 5.6636C16.6052 5.83239 16.7 6.0613 16.7 6.3V11.7Z"></path>{" "}
                </svg>
                In Công Thức
              </button>
            </div>

            <h4 className={cx("description")}>{foodData.description}</h4>

            <div className={cx("howtocook")} id="recipepart">
              <img src={foodData.image} alt="" />
              <h1 className={cx("howname")}>{foodData.name}</h1>
              <h4 className={cx("howauthor")}>Công thức của Sarah Steiner</h4>
              <h4 className={cx("howdiet")}>
                <p>
                  Chế độ ăn: <span>{foodData.diet}</span>
                </p>
                <p>
                  Độ khó: <span>Dễ</span>
                </p>
              </h4>

              <div className={cx("quickreview")}>
                <div className={cx("quickreview-item")}>
                  <FontAwesomeIcon icon={faStopwatch} className={cx("icon")} />
                  <h4>Thời gian chuẩn bị</h4>
                  <p>15 phút</p>
                </div>
                <div className={cx("quickreview-item")}>
                  <FontAwesomeIcon icon={faUtensils} className={cx("icon")} />
                  <h4>Thời gian nấu</h4>
                  <p>5 phút</p>
                </div>
                <div className={cx("quickreview-item")}>
                  <FontAwesomeIcon
                    icon={faFireFlameCurved}
                    className={cx("icon")}
                  />
                  <h4>Calories</h4>
                  <p>435 kcal</p>
                </div>
              </div>

              <div className={cx("ingredients")}>
                <h3>Nguyên liệu</h3>
                <ul>
                  {foodData.ingredients.map((ingredient, index) => (
                    <li key={index}>
                      <input type="radio" />
                      <span> {ingredient.quantity}</span>
                      <span> {ingredient.unit}</span>
                      <span> {ingredient.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={cx("recipe")}>
                <h3>Cách làm</h3>
                <ul>
                  {foodData.recipe.map((step, index) => (
                    <li key={index}>
                      <span>{index + 1}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={cx("right")}>
            <ul>
              <li>
                <img
                  src="https://insieutoc.vn/wp-content/uploads/2021/02/mau-banner-quang-cao-dep.jpg"
                  alt="mẫu banner quảng cáo đẹp"
                />
              </li>
              <li>
                <img
                  src="https://insieutoc.vn/wp-content/uploads/2021/02/mau-banner-cua-hang-thuc-an-nhanh-1536x1097.jpg"
                  alt="ads"
                />
              </li>
              <li>
                <img
                  src="https://insieutoc.vn/wp-content/uploads/2021/02/mau-banner-cho-quan-an.jpg"
                  alt="ads"
                />
              </li>
              <li>
                <img
                  src="https://insieutoc.vn/wp-content/uploads/2021/02/mau-banner-shop-thoi-trang.jpg"
                  alt="ads"
                />
              </li>
              <li>
                <img
                  src="https://insieutoc.vn/wp-content/uploads/2021/02/mau-banner-dep-ca-tinh.jpg"
                  alt="ads"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
