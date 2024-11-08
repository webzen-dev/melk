import { FaSearchLocation } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { GrDocumentStore, GrDocumentTime, GrGroup } from "react-icons/gr";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { TiDocumentDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import { PiOfficeChairThin } from "react-icons/pi";
import { TbHomeDollar } from "react-icons/tb";
import { LiaFileContractSolid } from "react-icons/lia";

const Home = () => {
  return (
    <div className="home-app">
      <div className="hero-section">
        <div className="title">املاک تراس</div>
        <div className="account">
        <div className="profile">
          <FcBusinessman />
        </div>
        <div className="score">10 امتیاز </div>
        <div className="box">
          <div className="child-box">
            <span>اکانت </span>
            <span>6 </span>
            <span>ماهه</span>
          </div>
          <div className="line-bar">
            <div className="line" />
          </div>
          <div className="child-box">
            <span>30</span>
            <span>روز باقی مانده</span>
          </div>
        </div>
      </div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="جست و جو" />
        <FaSearchLocation />
      </div>
      <div className="filing-list">
        <div className="title">
          <span>سبد فایل های تراس </span>
          <div className="line" />
        </div>
        <div className="box">
          <div className="item">
            <IoDocumentAttachOutline />
            <span>فایلینگ</span>
          </div>
          <div className="item">
            {" "}
            <GrDocumentTime />
            <span>فایلینگ بروزرسانی</span>
          </div>
          <div className="item">
            {" "}
            <TiDocumentDelete />
            <span>فایلینگ حذف شده</span>
          </div>
          <div className="item">
            {" "}
            <GrDocumentStore />
            <span>فایل داغ</span>
          </div>
        </div>
      </div>
      <Link to={"/adverts"} className="link-to-adverts">
        <img src="/images/home.png" alt="home image" />
        <div className="title">ملک مورد نظر خود را پیدا کنید</div>
        <span>400 اگهی </span>
      </Link>
      <div className="home-box">
        <div className="item">
          <GrGroup />

          <span>دفتر مشتری</span>
        </div>
        <div className="item">
          <PiOfficeChairThin />

          <span>دفتر فایل</span>
        </div>
        <div className="item">
          <TbHomeDollar />

          <span>اگهی های پلاس</span>
        </div>
        <div className="item">
          <LiaFileContractSolid />

          <span>رهن و اجاره </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
