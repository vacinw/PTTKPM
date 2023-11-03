import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./FoodInput.module.scss";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import filtersSlice from "../../filtersSlice";
const cx = classNames.bind(styles);

function FoodInput() {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  const [foodInput, setFoodInput] = useState("");

  const handleChangeFoodInput = (e) => {
    setFoodInput(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.keyCode !== 13 || e.target.value === "") return;
    setList([...list, e.target.value]);
    dispatch(
      filtersSlice.actions.searchIngredientsChange([...list, e.target.value])
    );
    setFoodInput("");
    foodInputRef.current.focus();
  };

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    dispatch(filtersSlice.actions.searchIngredientsChange(newList));

    setList(newList);
  };
  const foodInputRef = useRef();

  return (
    <div className={cx("wrapper")}>
      <input
        className={cx("input")}
        type="text"
        placeholder="Nhập nguyên liệu..."
        ref={foodInputRef}
        value={foodInput}
        onChange={handleChangeFoodInput}
        onKeyUp={handleSubmit}
      />
      <div className={cx("input-list")}>
        {list.map((foodInput, index) => (
          <div className={cx("input-item")} key={index}>
            <p>{foodInput}</p>
            <FontAwesomeIcon
              className={cx("delete-btn")}
              icon={faXmark}
              onClick={() => handleDelete(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodInput;
