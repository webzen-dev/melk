import { CiSearch } from "react-icons/ci";
import ListOfAdverts from "./ListOfAdverts";
import AdLinks from "./AdLinks";

const DesktopHome = () => {
  return (
    <div className="desktop-home">
      <div className="desktop-container">
      <div className="header">
        <span>ملک تراس</span>
        <span>ورود مشاورین و کارگزاران املاک</span>
      </div>
        <div className="title">بهترین و مناسب ترین خانه خود را پیدا کنید</div>
        <div className="filter">
          <select>
            <option value="">فایل های مالکین</option>
            <option value="">فایل های مشاورین</option>
            <option value="">همه ی موارد</option>
          </select>{" "}
          <select>
            <option value="">همه ی موارد</option>
            <option value="">رهن و اجاره</option>
            <option value="">فروش</option>
            <option value="">رهن کامل</option>
            <option value="">پیش فروش</option>
            <option value="">مشارکت</option>
          </select>
          <select>
            <option value="">همه ی موارد</option>
            <option value="">آپارتمان</option>
            <option value="">دفتر کار</option>
            <option value="">مغازه</option>
            <option value="">ویلایی</option>
            <option value="">سوله انباری</option>
            <option value="">باغ ویلا</option>
          </select>
          <select>
            <option value="">کمتر از 100 متر</option>
            <option value="">بین 100 تا 150 متر</option>
            <option value="">بین 150 تا 200 متر </option>
            <option value="">بین 200 تا 300 متر</option>
            <option value="">بیشتر از 300 متر</option>
          </select>
          <div className="search">
            <CiSearch />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <ListOfAdverts />
        <AdLinks />
      </div>
    </div>
  );
};

export default DesktopHome;
