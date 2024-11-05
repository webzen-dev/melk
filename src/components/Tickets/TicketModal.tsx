import { MdClose } from "react-icons/md";
import { VscSend } from "react-icons/vsc";

const TicketModal = () => {
  return (
    <div className="ticket-modal">
      <div className="box">
        <div className="header">
          <MdClose />
          <div className="title">
            <span>عنوان :</span>
            <span>عنوان پیام</span>
          </div>
          <div className="code">
            <span>کد تیکت </span>: <span>#fenfieqr</span>
          </div>
        </div>
        <div className="message-box">
          <div className="message">
            <div className="text">
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش
              کلیک کنید{" "}
            </div>
            <div className="date">1403-2-2</div>
          </div>
          <div className="message admin-message">
            <div className="text">
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش
              کلیک کنید{" "}
            </div>
            <div className="date">1403-2-2</div>
          </div>
          <div className="message">
            <div className="text">
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش
              کلیک کنید{" "}
            </div>
            <div className="date">1403-2-2</div>
          </div>
          <div className="message  admin-message">
            <div className="text">
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش
              کلیک کنید{" "}
            </div>
            <div className="date">1403-2-2</div>
          </div>
        </div>
        <div className="input-box">
          <VscSend />
          <input type="text " placeholder="پیام خود را وارد " />
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
    