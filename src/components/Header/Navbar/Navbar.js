import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Button } from "~/components/Header/components/Button";

import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "~/redux/selectors";
import userSlice from "~/components/pages/forms/userSlice";
const cx = classNames.bind(styles);

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const handleLogout = () => {
    dispatch(userSlice.actions.logout());
  };

  return (
    <div className={cx("wrapper")}>
      {!user.isLoggedIn && (
        <>
          <Button children={"Đăng nhập"} primary link="/login" />
          <Button children={"Đăng ký"} link="/register" />
        </>
      )}
      {user.isLoggedIn && (
        <>
          <Button children={"Đăng xuất"} onClick={handleLogout} />
          <Button
            children={<FontAwesomeIcon icon={faBell} />}
            btn-icon
            primary
          />
          <img
            className={cx("user")}
            src="https://genk.mediacdn.vn/2018/4/8/ponyo-watching-recommendation-videosixteenbynine768-15231941245221140446230.jpg"
            alt=""
          />
        </>
      )}
      <FontAwesomeIcon icon={faEllipsisVertical} className={cx("nav-icon")} />
    </div>
  );
}

export default Navbar;
