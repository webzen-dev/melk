import React from "react";
import { IoMdClose } from "react-icons/io";

type RepProps = {
  onClose: () => void;  // تعریف صحیح نوع تابع
};

const Reports: React.FC<RepProps> = ({ onClose }) => {
  return (
    <div className="reports-page">
      <div className="box">
        <div className="header">
          <span>کلید ارسال گزارش</span>
          {/* فراخوانی صحیح onClose */}
          <IoMdClose onClick={() => onClose()} /> 
        </div>
        <div className="child-box">
          <div className="item">عدم همکاری</div>
          <div className="item">شماره اشتباه</div>
          <div className="item">واگذار شده</div>
          <div className="item">مشاور املاک</div>
          <div className="item">قیمت اشتباه</div>
          <div className="item">اطلاعات اشتباه</div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
