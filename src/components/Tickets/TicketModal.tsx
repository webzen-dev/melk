import { MdClose } from "react-icons/md";
import { VscSend } from "react-icons/vsc";

interface TicketModalProps {
  setOpenMessage: (value: boolean) => void;
  ticket: {
    id: number;
    title: string;
    date: string;
    textMessage: { role: string; message: string }[];
  };
}

const TicketModal: React.FC<TicketModalProps> = ({
  setOpenMessage,
  ticket,
}) => {
  return (
    <div className="ticket-modal">
      <div className="box">
        <div className="header">
          {/* Close button to hide the modal */}
          <MdClose onClick={() => setOpenMessage(false)} />
          <div className="title">
            <span>عنوان :</span>
            <span>{ticket.title}</span>
          </div>
          <div className="code">
            <span>کد تیکت </span>: <span>#{ticket.id}</span>
          </div>
        </div>
        <div className="message-box">
          {ticket.textMessage.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.role === "admin" ? "admin-message" : ""
              }`}
            >
              <div className="text">{msg.message}</div>
              <div className="date">{ticket.date}</div>
            </div>
          ))}
        </div>
        <div className="input-box">
          <VscSend />
          <input type="text" placeholder="پیام خود را وارد کنید" />
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
