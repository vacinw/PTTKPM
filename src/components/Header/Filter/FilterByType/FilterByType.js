import classNames from "classnames/bind";
import styles from "./FilterByType.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import filtersSlice from "../../filtersSlice";

import React, { useRef, useEffect } from "react";
const cx = classNames.bind(styles);

function FilterByType() {
  const dispatch = useDispatch();
  const [chooseMode, setChooseMode] = useState(false);

  const handleToggleSelectMode = () => {
    setChooseMode(!chooseMode);
  };

  const [diet, setDiet] = useState("");

  const handleSelectDiet = (e) => {
    setDiet(e.target.textContent);
    setChooseMode(!chooseMode);
    dispatch(filtersSlice.actions.searchDietChange(e.target.textContent));
  };

  const dietRef = useRef();

  useEffect(() => {
    if (dietRef.current) {
      if (dietRef.current.innerHTML === "Chế độ ăn thường") {
        dietRef.current.style.backgroundColor = "#ff524b";
      } else if (dietRef.current.innerHTML === "Chế độ ăn chay") {
        dietRef.current.style.backgroundColor = "#00b66d";
      } else if (dietRef.current.innerHTML === "Chế độ ăn kiêng") {
        dietRef.current.style.backgroundColor = "#b1a289";
      } else {
        dietRef.current.style.backgroundColor = "#6076a1";
      }
    }
  }, [chooseMode]);

  return (
    <div className={cx("wrapper")}>
      <div
        className={cx("item", "selected")}
        onClick={handleToggleSelectMode}
        ref={dietRef}
      >
        {diet || "Chế độ ăn"}
      </div>
      {chooseMode && (
        <div className={cx("item-list")}>
          <div className={cx("item")} onClick={handleSelectDiet}>
            Tất cả chế độ ăn
          </div>
          <div className={cx("item", "thuong")} onClick={handleSelectDiet}>
            Chế độ ăn thường
          </div>
          <div className={cx("item", "chay")} onClick={handleSelectDiet}>
            Chế độ ăn chay
          </div>
          <div className={cx("item", "kieng")} onClick={handleSelectDiet}>
            Chế độ ăn kiêng
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterByType;
