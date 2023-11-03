import { NavSidebar } from "./NavSidebar";
import { Footer } from "./Footer";
import { Discover } from "./Discover";
import { Support } from "./Support";

import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
const cx = classNames.bind(styles);

function Sidebar({ active }) {
  // console.log(active);
  return (
    <div className={cx("wrapper")}>
      <NavSidebar active={active} />
      <div className={cx("hr")}></div>
      <Discover />
      <div className={cx("hr")}></div>
      <Support />
      <div className={cx("hr")}></div>
      <Footer />
    </div>
  );
}

export default Sidebar;
