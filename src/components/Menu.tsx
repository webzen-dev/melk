import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <Link to={"/"} className="menu-item">
        <img src="/images/home-menu.png" alt="" />
        <span>صفحه ی نخست</span>
      </Link>
      <a href="#" className="menu-item">
        <img src="/images/bookmark.png" alt="" />
        <span>ذخیره ها</span>
      </a>
      <a href="#" className="menu-item main-menu-item">
        <span>+</span>
      </a>
      <Link to="/panel" className="menu-item">
        <img src="/images/user.png" alt="" />

        <span>پنل کاربری</span>
      </Link>
      <a href="#" className="menu-item">
        {" "}
        <img src="/images/online-support.png" alt="" />
        <span>پشتیبانی</span>
      </a>
    </div>
  );
};

export default Menu;
