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
  textMessage: { role: string; message: string }[];
}

const TickerContainer: React.FC = () => {
  const [openMessage, setOpenMessage] = useState<boolean>(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticker | null>(null);
  const [data, setData] = useState<Ticker[]>([
    {
      id: 232323,
      title: "عنوان تیکت",
      status: "sucsses",
      date: "1402-2-3",
      textMessage: [
        { role: "admin", message: "Admin message 1" },
        { role: "user", message: "User message 1" },
        { role: "admin", message: "Admin message 2" },
      ],
    },
    {
      id: 989898,
      title: "عنوان تیکت",
      status: "cancel",
      date: "1402-2-3",
      textMessage: [
        { role: "admin", message: "Admin message 1" },
        { role: "user", message: "User message 1" },
        { role: "admin", message: "Admin message 2" },
      ],
    },
    {
      id: 787878,
      title: "عنوان تیکت",
      status: "sending",
      date: "1402-2-3",
      textMessage: [
        { role: "admin", message: "Admin message 1" },
        { role: "user", message: "User message 1" },
        { role: "admin", message: "Admin message 2" },
      ],
    },
  ]);

  const handleOpenMessage = (ticket: Ticker) => {
    setSelectedTicket(ticket);
    setOpenMessage(true);
  };

  return (
    <div className="ticket-container">
      <div className="header">
        <Link to={"/panel/profile"}>
          <GrNext />
        </Link>
        <span>تیکت ها</span>
        <FiMessageSquare />
      </div>
      <div className="ticket-list">
        <div className="header-list">
          <div className="ticket-code">کد تیکت<FaCaretDown /></div>
          <div className="title">عنوان تیکت<FaCaretDown /></div>
          <div className="request-status">وضعیت<FaCaretDown /></div>
          <div className="date">تاریخ ارسال<FaCaretDown /></div>
          <div className="">--</div>
        </div>
        <div className="list">
          {data.map((ticket) => (
            <div className="message" key={ticket.id}>
              <div className="code">#{ticket.id}</div>
              <div className="title">{ticket.title}</div>
              <div className={`status ${ticket.status}`}>
                {ticket.status}
              </div>
              <div className="date">{ticket.date}</div>
              <button onClick={() => handleOpenMessage(ticket)}>
                مشاهده
              </button>
            </div>
          ))}
        </div>
      </div>
      {openMessage && selectedTicket && (
        <TicketModal
          setOpenMessage={setOpenMessage}
          ticket={selectedTicket}
        />
      )}
    </div>
  );
};

export default TickerContainer;
