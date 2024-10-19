import { FaAngleDown } from "react-icons/fa";
const FilterTriggerModal = () => {
  return (
    <div className="filter-trigger-modal">
      <div className="header">
        <span> جستجوی فایل</span>
        <FaAngleDown />
      </div>
      <div className="parent-box">
        <div className="title">نوع معامله</div>
        <div className="box">
          <div className="item">خرید , فروش</div>
          <div className="item">رهن , اجاره</div>
          <div className="item">رهن کامل </div>
          <div className="item">پیش فروش</div>
          <div className="item">مشارکت</div>
        </div>
      </div>
    </div>
  );
};

export default FilterTriggerModal;
