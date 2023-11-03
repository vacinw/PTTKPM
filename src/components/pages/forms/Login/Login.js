import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { usersSelector } from "~/redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "~/components/pages/forms/userSlice";
const cx = classNames.bind(styles);

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(usersSelector);

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleChangeUsername = (e) => {
    setUserInfo({ ...userInfo, username: e.target.value });
  };

  const handleChangePassword = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.username === "" || userInfo.password === "") {
      alert("Ban phai nhap day du thong tin");
      return;
    }

    const isValidInfo = users.find(
      (user) =>
        userInfo.username === user.username &&
        userInfo.password === user.password
    );

    if (!isValidInfo) {
      setUserInfo({
        username: "",
        password: "",
      });
      alert("Ten dang nhap hoac mat khau khong dung");
      usernameRef.current.focus();
    } else {
      dispatch(userSlice.actions.login(isValidInfo));
      navigate("/");
    }
  };

  const usernameRef = useRef();

  return (
    <div className={cx("wrapper")}>
      <div className={cx("fadeIn first")}>
        <img
          className={cx("header")}
          src="https://media.wired.co.uk/photos/626c4ae5c7aeb6a48f3c9c68/3:2/w_2025,h_1350,c_limit/Spirited-Away-Studio-Ghibli-Ranking-MMDSPAW_EC001.jpg"
          alt=""
        />
      </div>

      <h4 className={cx("label")}>
        <Link to="/">
          <FontAwesomeIcon className={cx("back-icon")} icon={faChevronLeft} />
        </Link>
        Đăng nhập
      </h4>

      <form className={cx("form-template")}>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          ref={usernameRef}
          value={userInfo.username}
          onChange={handleChangeUsername}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={userInfo.password}
          onChange={handleChangePassword}
        />
        <input type="submit" value="Đăng nhập" onClick={handleSubmit} />
      </form>

      <Link className={cx("forgot-password")} to="/forgotPassword">
        Quên mật khẩu?
      </Link>

      <div className={cx("formFooter")}>
        Chưa có tài khoản?
        <Link className={cx("underlineHover", "register-btn")} to="/register">
          Đăng ký
        </Link>
        ngay
      </div>
    </div>
  );
}

export default Login;
