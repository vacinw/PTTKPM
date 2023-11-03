import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames from "classnames/bind";
import styles from "./SideButton.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function SideButton({ children, icon, link = false, active, ...classNames }) {
  return (
    <Link to={link} className={cx("wrapper", active, { ...classNames })}>
      <FontAwesomeIcon icon={icon} className={cx("icon", active)} />
      {children}
    </Link>
  );
}

export default SideButton;
