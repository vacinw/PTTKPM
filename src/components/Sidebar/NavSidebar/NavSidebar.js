import { faBlog, faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import { SideButton } from "../components/SideButton";
import { useSelector } from "react-redux";
import { userSelector } from "~/redux/selectors";

function NavSidebar({ active = "home" }) {
  // console.log(active);
  let home = "no-active";
  let fav = "no-active";
  if (active === "home") {
    home = "active";
  } else if (active === "fav") {
    fav = "active";
  }
  const user = useSelector(userSelector);
  // console.log(user);

  // console.log(home, fav);
  return (
    <div className="wrapper">
      <SideButton children={"Trang chủ"} active={home} icon={faHome} link="/" />
      {user.isLoggedIn && (
        <SideButton
          children={"Danh sách yêu thích"}
          icon={faHeart}
          link="/favoriteFood"
          active={fav}
        />
      )}

      <SideButton children={"Blog"} icon={faBlog} />
    </div>
  );
}

export default NavSidebar;
