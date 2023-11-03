import classNames from "classnames/bind";
import styles from "./FavoriteFood.module.scss";
import { Header } from "~/components/Header";
import { Sidebar } from "~/components/Sidebar";
import { ChatBox } from "~/components/ChatBox";
import { Main } from "~/components/Main";

const cx = classNames.bind(styles);
function FavoriteFood() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Sidebar active="fav" />
      <Main fav={true} />
      <ChatBox />
    </div>
  );
}

export default FavoriteFood;
