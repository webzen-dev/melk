import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";

type reportProp = {
  id: number;
  name: string;
};

type ReportInputProps = {
  rep: reportProp;
  onClose: () => void;
};

const ReportInput: React.FC<ReportInputProps> = ({ rep, onClose }) => {
  const [data, setData] = useState<reportProp>(rep);

  return (
    <div className="report-input">
      <div className="box">
        <div className="title">
          <TbMessageReport />
         <span> ارسال گزارش به پشتیبانی</span>
      <MdClose className="close-button" onClick={onClose} />
        </div>
        <div className="child-box">
          <span>علت گزارش</span>:<span>{rep.name}</span>
        </div>
        <textarea
          name="reportTest"
          id="report-textaria"
          placeholder="متن گزارش خود را وارد کنید "
        ></textarea>
        <button>ارسال گزارش </button>
      </div>
    </div>
  );
};

export default ReportInput;
