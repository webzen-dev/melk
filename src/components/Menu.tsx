import {
  MdBookmarkBorder,
  MdFace,
  MdOutlineHome,
  MdOutlineHomeWork,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <Link to={"/"} className="menu-item">
        <MdOutlineHome />
        <span>صفحه ی نخست</span>
      </Link>{" "}
      <Link to={"/adverts"} className="menu-item">
        <MdOutlineHomeWork />
        <span>اگهی ها</span>
      </Link>
      <a href="#" className="menu-item main-menu-item">
        <span>+</span>
      </a>
      <Link to="/panel" className="menu-item">
      <MdFace />

        <span>پنل کاربری</span>
      </Link>
      <Link to={"/saved-adverts"} className="menu-item">
        <MdBookmarkBorder />
        <span>ذخیره ها</span>
      </Link>
    </div>
  );
};

export default Menu;
