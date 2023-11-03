import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "~/redux/selectors";
import { addUser } from "../usersSlice";

const cx = classNames.bind(styles);

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(usersSelector);

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeUsername = (e) => {
    setUserInfo({ ...userInfo, username: e.target.value });
  };

  const handleChangePassword = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handleChangeConfirmPassword = (e) => {
    setUserInfo({ ...userInfo, confirmPassword: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userInfo.username === "" ||
      userInfo.password === "" ||
      userInfo.confirmPassword === ""
    ) {
      alert("Nhap du");
      return;
    }
    if (userInfo.password !== userInfo.confirmPassword) {
      setUserInfo({ ...userInfo, confirmPassword: "" });
      confirmPasswordRef.current.focus();
      alert("Xac nhan ngu");
      return;
    }

    const isValidInfo = users.find((user) => {
      return user.username === userInfo.username;
    });

    if (isValidInfo) {
      setUserInfo({
        username: "",
        password: "",
        confirmPassword: "",
      });
      alert("username da to tai");
      usernameRef.current.focus();
    } else {
      dispatch(
        addUser({
          username: userInfo.username,
          password: userInfo.password,
          diet: "null",
          liked: [],
        })
      );

      navigate("/login");
    }
  };
  const usernameRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <div className={cx("wrapper")}>
      <div className={cx("fadeIn first")}>
        <img
          className={cx("header")}
          src="https://media.wired.co.uk/photos/626c4ae5c7aeb6a48f3c9c68/3:2/w_2025,h_1350,c_limit/Spirited-Away-Studio-Ghibli-Ranking-MMDSPAW_EC001.jpg"
          id="icon"
          alt="User Icon"
        />
      </div>

      <h4 className={cx("label")}>
        <Link to="/">
          <FontAwesomeIcon className={cx("back-icon")} icon={faChevronLeft} />
        </Link>
        Đăng ký
      </h4>

      <form className={cx("form-template")}>
        <input
          className={cx("fadeIn second")}
          type="text"
          placeholder="Tên đăng nhập"
          ref={usernameRef}
          value={userInfo.username}
          onChange={handleChangeUsername}
        />
        <input
          type="password"
          className={cx("fadeIn third")}
          placeholder="Mật khẩu"
          value={userInfo.password}
          onChange={handleChangePassword}
        />
        <input
          type="password"
          className={cx("fadeIn third")}
          placeholder="Xác nhận mật khẩu"
          ref={confirmPasswordRef}
          value={userInfo.confirmPassword}
          onChange={handleChangeConfirmPassword}
        />
        <input
          type="submit"
          className={cx("fadeIn fourth")}
          value="Đăng ký"
          onClick={handleSubmit}
        />
      </form>

      <div className={cx("formFooter")}>
        Đã có tài khoản?
        <Link to="/login" className={cx("underlineHover")}>
          Đăng nhập
        </Link>
        ngay
      </div>
    </div>
  );
}

export default Register;
