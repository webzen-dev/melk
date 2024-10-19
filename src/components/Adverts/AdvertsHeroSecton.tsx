import { Link } from "react-router-dom";

const AdvertsHeroSecton = () => {
  return (
    <div className="advert-hero-dection">
      <div className="logo">
        <img src="images/logo.png" alt="logo" />
      </div>
      <div className="title">فایلینگ</div>
      <Link to={"/"}> {">"}</Link>
      <div className="search-box">
        <input type="text" placeholder="جستجو ملک مورد نظر شما" />
        <img src="images/search.png" alt="search icon" />
      </div>
    </div>
  );
};

export default AdvertsHeroSecton;
