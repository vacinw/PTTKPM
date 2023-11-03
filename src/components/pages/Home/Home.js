import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Header } from "~/components/Header";
import { Sidebar } from "~/components/Sidebar";
import { Main } from "~/components/Main";
import { ChatBox } from "~/components/ChatBox";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Sidebar />
      <Main />
      <ChatBox />
    </div>
  );
}

export default Home;
