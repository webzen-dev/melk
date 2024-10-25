import { GiSettingsKnobs } from "react-icons/gi";
import { GrFormClose, GrNext } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
import React, { useState, useEffect } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";

interface Transaction {
  date: string;
  title: string;
  user: string;
  amount: number;
  isSuccess: boolean;
}

const TransactionBox: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      date: "1402-11-25",
      title: "افزایش اعتبار",
      user: "usertest@gmail.com",
      amount: 2000000,
      isSuccess: true,
    },
    {
      date: "1402-12-25",
      title: "افزایش اعتبار",
      user: "usertest@gmail.com",
      amount: 100000,
      isSuccess: false,
    },
  ]);

  const formatDate = (date: string): { day: string; month: string } => {
    const [year, month, day] = date.split("-").map(Number);
    const months = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];
    return {
      day: day.toString(),
      month: months[month - 1],
    };
  };

  return (
    <div className="transaction-list">
      <div className="header">
        <GiSettingsKnobs />
        <span>تراکنش‌ها</span>
        <Link to={"/panel/profile"}>
          <GrNext />
        </Link>
      </div>
      <div className="list">
        {transactions.length === 0 ? (
          <div className="no-transaction">
            تراکنشی وجود ندارد
            <MdOutlineErrorOutline />
          </div>
        ) : (
          transactions.map((transaction, index) => {
            const { day, month } = formatDate(transaction.date);
            return (
              <div className="item" key={index}>
                <div className="date">
                  <span>{day}</span>
                  <span>{month}</span>
                </div>
                <div className="info">
                  <div className="title">{transaction.title}</div>
                  <div className="user">{transaction.user}</div>
                </div>
                <div
                  className={`report ${
                    transaction.isSuccess ? "true" : "false"
                  }`}
                >
                  {transaction.isSuccess ? (
                    <>
                      موفق <TiTick />
                    </>
                  ) : (
                    <>
                      ناموفق <GrFormClose />
                    </>
                  )}
                </div>
                <div className="price">
                  <span>{transaction.amount.toLocaleString()}</span>
                  <span>تومان</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TransactionBox;
