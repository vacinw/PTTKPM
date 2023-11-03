import { Navbar } from "./Navbar";
import { Search } from "./Search";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Filter from "./Filter/Filter";
const cx = classNames.bind(styles);

function Header({ search = true, filter = true }) {
  return (
    <div className={cx("wrapper")}>
      <Link to="/" className={cx("logo")}>
        <img
          className={cx("img")}
          src="https://cdn.freelogodesign.org/files/68e0a74eb86a45099377c29064d7a171/thumb/logo_200x200.png?v=0"
          alt=""
        />
        <p className={cx("title")}> Easy Cook</p>
      </Link>
      {search && <Search />}
      <Navbar />
      {filter && <Filter />}
    </div>
  );
}

export default Header;
