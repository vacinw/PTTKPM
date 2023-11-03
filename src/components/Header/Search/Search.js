import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import filtersSlice from "../filtersSlice";
const cx = classNames.bind(styles);

function Search() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");

  const handleChangeSearchText = (e) => {
    setSearchText(e.target.value);
    dispatch(filtersSlice.actions.searchNameChange(e.target.value));
  };
  return (
    <div className={cx("wrapper")}>
      <input
        className={cx("search-text")}
        type="text"
        placeholder="Tìm kiếm..."
        value={searchText}
        onChange={handleChangeSearchText}
      />
      <div className={cx("search-icon")}>
        <FontAwesomeIcon icon={faSearch} className={cx("icon")} />
      </div>
    </div>
  );
}

export default Search;
