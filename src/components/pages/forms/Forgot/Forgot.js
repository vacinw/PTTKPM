import classNames from "classnames/bind";
import styles from "./Forgot.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "~/redux/selectors";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../usersSlice";

const cx = classNames.bind(styles);

function ForgotPassword() {
  const navigate = useNavigate();
  const users = useSelector(usersSelector);
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    username: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChangeUsername = (e) => {
    setUserInfo({ ...userInfo, username: e.target.value });
  };

  const handleChangeNewPassword = (e) => {
    setUserInfo({ ...userInfo, newPassword: e.target.value });
  };

  const handleChangeConfirmPassword = (e) => {
    setUserInfo({ ...userInfo, confirmPassword: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userInfo.username === "" ||
      userInfo.newPassword === "" ||
      userInfo.confirmPassword === ""
    ) {
      alert("Ban phai nhap day du thong tin");
      return;
    }
    if (userInfo.newPassword !== userInfo.confirmPassword) {
      setUserInfo({
        ...userInfo,
        confirmPassword: "",
      });
      alert("Mat khau xac nhan khong khop");

      userConfirmPasswordRef.current.focus();
      return;
    }

    const isValidInfo = users.find(
      (user) => user.username === userInfo.username
    );
    if (!isValidInfo) {
      setUserInfo({
        username: "",
        newPassword: "",
        confirmPassword: "",
      });
      alert("Username khong ton tai");

      usernameRef.current.focus();
    } else {
      dispatch(
        updatePassword({
          ...isValidInfo,
          password: userInfo.newPassword,
        })
      );
      navigate("/login");
    }
  };

  const usernameRef = useRef();
  const userConfirmPasswordRef = useRef();

  return (
    <div className={cx("wrapper")}>
      <div className={cx("fadeIn first")}>
        <img
          className={cx("header")}
          src="https://media.wired.co.uk/photos/626c4ae5c7aeb6a48f3c9c68/3:2/w_2025,h_1350,c_limit/Spirited-Away-Studio-Ghibli-Ranking-MMDSPAW_EC001.jpg"
          alt="User Icon"
        />
      </div>

      <h4 className={cx("label")}>
        <Link to="/login">
          <FontAwesomeIcon className={cx("back-icon")} icon={faChevronLeft} />
        </Link>
        Lấy lại mật khẩu
      </h4>

      <form className={cx("form-template")}>
        <input
          type="text"
          className={cx("fadeIn second")}
          placeholder="Tên đăng nhập"
          ref={usernameRef}
          value={userInfo.username}
          onChange={handleChangeUsername}
        />
        <input
          type="password"
          className={cx("fadeIn third")}
          placeholder="Mật khẩu mới"
          value={userInfo.newPassword}
          onChange={handleChangeNewPassword}
        />
        <input
          type="password"
          className={cx("fadeIn third")}
          placeholder="Xác nhận mật khẩu"
          ref={userConfirmPasswordRef}
          value={userInfo.confirmPassword}
          onChange={handleChangeConfirmPassword}
        />
        <input
          type="submit"
          className={cx("fadeIn fourth")}
          value="Xác nhận"
          onClick={handleSubmit}
        />
      </form>

      <div className={cx("formFooter")}></div>
    </div>
  );
}

export default ForgotPassword;
