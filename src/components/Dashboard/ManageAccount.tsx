import { Link } from "react-router-dom";
import { GrGroup, GrLogout, GrMoney, GrPrevious } from "react-icons/gr";
import React, { useState, useEffect } from "react";
import TransactionBox from "./TransactionBox";
import { FaRegUserCircle, FaWallet } from "react-icons/fa";

const ManageAccount: React.FC = () => {
  const [validity, setValidity] = useState<number>(234334000);
  const [expirationDate, setExpirationDate] = useState<string>("1403-8-3");
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const formatToDate = (date: string) => {
      return date.replace(/-/g, "/");
    };
    setFormattedDate(formatToDate(expirationDate));
  }, [expirationDate]);

  const formatValidity = (value: number): string => {
    if (value >= 1000000) {
      return `${Math.floor(value / 1000000)} میلیون تومان`;
    } else {
      return `${Math.floor(value / 1000)} هزار تومان`;
    }
  };

  return (
    <div className="dashboard-manage-account">
      <div className="header">
        <FaRegUserCircle />
        <span>پروفایل</span>
      </div>
      <div className="box">
        <div className="validity child-box">
          <FaWallet className="sticker" />
          <div className="title">اعتبار حساب</div>
          <span>{formatValidity(validity)}</span>
          <div>
            <span>تاریخ انقضا</span>
            <span>{formattedDate}</span>
          </div>
        </div>
        <Link to={"/panel/profile/add-user"} className="child-box">
          <GrGroup />
          <span>لیست اکانت‌ها</span>
          <GrPrevious className="arrow" />
        </Link>
        <Link to={"/panel/profile/validity"} className="child-box">
          <GrMoney />
          <span>افزایش اعتبار</span>
          <GrPrevious className="arrow" />
        </Link>
      </div>
      <Link to={"/panel/profile/transaction-list"} className="transaction-box">
        <div className="child-box">
          <div className="title">لیست تراکنش ها</div>
          <GrPrevious className="arrow" />
        </div>
      </Link>
      <Link to={"/panel"} className="out">
        <div className="child-box">
          <span>بازگشت به پنل </span>
          <GrLogout />
        </div>
      </Link>
    </div>
  );
};

export default ManageAccount;
