import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ReportInput from "./ReportInput";

type reportProp = {
  id: number;
  name: string;
};

type RepProps = {
  onClose: () => void;
};

const Reports: React.FC<RepProps> = ({ onClose }) => {
  const report: reportProp[] = [
    { id: 1, name: "عدم همکاری" },
    { id: 2, name: "شماره اشتباه" },
    { id: 3, name: "واگذاری شده" },
    { id: 4, name: "مشاوره املاک" },
    { id: 5, name: "قیمت اشتباه" },
    { id: 6, name: "اطلعات اشتباه" },
  ];

  const [selectedReport, setSelectedReport] = useState<reportProp | null>(null);

  return (
    <div className="reports-page">
      <div className="box">
        <div className="header">
          <span>کلید ارسال گزارش</span>
          <IoMdClose onClick={onClose} />
        </div>

        <div className="child-box">
          {report.map((rep) => (
            <div
              className="item"
              key={rep.id}
              onClick={() => setSelectedReport(rep)} 
            >
              {rep.name}
            </div>
          ))}
        </div>
      </div>

      {selectedReport && (
        <ReportInput
          rep={selectedReport}
          onClose={() => setSelectedReport(null)} 
        />
      )}
    </div>
  );
};

export default Reports;
