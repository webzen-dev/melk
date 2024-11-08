import React from "react";

type CopyAlertProps = {
  text: string;
};

const CopyAlert: React.FC<CopyAlertProps> = ({ text }) => {
  return (
    <div className="copy-alert-box">
      <div className="title">{text} با موفقیت کپی شد</div>
      <div className="mark">
        <img src="images/tick.png" alt="tick icon" />
      </div>
      <div className="line" />
    </div>
  );
};

export default CopyAlert;
