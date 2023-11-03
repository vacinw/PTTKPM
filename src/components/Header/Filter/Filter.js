import { FilterByType } from "./FilterByType";
import { FoodInput } from "./FoodInput";

import classNames from "classnames/bind";
import styles from "./Filter.module.scss";
const cx = classNames.bind(styles);

function Filter() {
  return (
    <div className={cx("wrapper")}>
      <FilterByType />
      <FoodInput />
    </div>
  );
}

export default Filter;
