const Menu = () => {
  return (
    <div className="menu">
      <a href="#" className="menu-item">
        <img src="/images/home-menu.png" alt="" />
        <span>صفحه ی نخست</span>
      </a>
      <a href="#" className="menu-item">
        <img src="/images/bookmark.png" alt="" />

        <span>ذخیره ها</span>
      </a>
      <a href="#" className="menu-item main-menu-item">
        <span>+</span>
      </a>
      <a href="#" className="menu-item">
        <img src="/images/user.png" alt="" />

        <span>حساب کاربری</span>
      </a>
      <a href="#" className="menu-item">
        {" "}
        <img src="/images/online-support.png" alt="" />
        <span>پشتیبانی</span>
      </a>
    </div>
  );
};

export default Menu;
