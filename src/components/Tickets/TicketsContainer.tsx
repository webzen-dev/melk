import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FiMessageSquare } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import React, { useState } from "react";
import TicketModal from "./TicketModal";
interface Ticker {
  id: number;
  title: string;
  status: string;
  date: string;
  textMessage: string;
}
const TickerContainer: React.FC = () => {
  const [openMessage, setOpenMessage] = useState<boolean>(true);
  const [data, setData] = useState<Ticker[]>([
    {
      id: 232323,
      title: "عنوان تیکت",
      status: "sucsses",
      date: "1402-2-3",
      textMessage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolor porro asperiores, possimus sed cupiditate blanditiis vero ducimus sint maiores culpa eius qui libero reiciendis? Doloribus commodi dolore sunt expedita.",
    },
    {
      id: 989898,
      title: "عنوان تیکت",
      status: "cancel",
      date: "1402-2-3",
      textMessage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolor porro asperiores, possimus sed cupiditate blanditiis vero ducimus sint maiores culpa eius qui libero reiciendis? Doloribus commodi dolore sunt expedita.",
    },
    {
      id: 787878,
      title: "عنوان تیکت",
      status: "sending",
      date: "1402-2-3",
      textMessage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolor porro asperiores, possimus sed cupiditate blanditiis vero ducimus sint maiores culpa eius qui libero reiciendis? Doloribus commodi dolore sunt expedita.",
    },
  ]);
  return (
    <div className="ticket-container">
      <div className="header">
        <FiMessageSquare />
        <span>تیکت ها</span>
        <Link to={"/panel/profile"}>
          <GrNext />
        </Link>
      </div>
      <div className="ticket-list">
        <div className="header-list">
          <div className="ticket-code">
            کد تیکت
            <FaCaretDown />
          </div>
          <div className="title">
            عنوان تیکت
            <FaCaretDown />
          </div>
          <div className="request-status">
            وضعیت
            <FaCaretDown />
          </div>
          <div className="date">
            تاریخ ارسال
            <FaCaretDown />
          </div>
          <div className="">--</div>
        </div>
        <div className="list">
          {data.map((data: any, key: number) => {
            return (
              <div className="message" key={key}>
                <div className="code">#{data.id}</div>
                <div className="title">{data.title}</div>
                <div
                  className={`status     ${
                    data.status === "sending" ? "sending" : ""
                  } ${data.status === "cancel" ? "cancel" : ""}
                   ${data.status === "sucsses" ? "sucsses" : ""}
                   `}
                >
                  {data.status}
                </div>
                <div className="date">{data.date}</div>
                <button onClick={() => setOpenMessage(!openMessage)}>
                  مشاهده
                </button>
                {openMessage && <TicketModal />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TickerContainer;
