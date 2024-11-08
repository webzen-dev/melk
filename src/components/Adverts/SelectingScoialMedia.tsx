import { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import CopyAlert from "./CopyAlert";

type ShareFileProps = {
  onClose: () => void;
};

const SelectingSocialMedia: React.FC<ShareFileProps> = ({ onClose }) => {
  const [link] = useState<string>("https://www.example.com");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const copyLink = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(link)
        .then(() => setShowAlert(true))
        .catch((err) => console.error("کپی کردن لینک موفقیت‌آمیز نبود:", err));
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = link;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setShowAlert(true);
      } catch (err) {
        console.error("کپی کردن لینک موفقیت‌آمیز نبود:", err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="box s">
      <div className="selecting-social-media">
        <div className="title">
          اشتراک‌گذاری در شبکه‌های اجتماعی
          <IoMdClose onClick={() => onClose()} />
        </div>
        <div className="items">
          <a href="#" className="item">
            <img src="/images/social-mdia/eitaa.png" alt="" />
            <span>ایتا</span>
          </a>
          <a href="#" className="item">
            <img src="/images/social-mdia/robika.png" alt="" />
            <span>روبیکا</span>
          </a>
          <a href="#" className="item">
            <img src="/images/social-mdia/telegram.png" alt="" />
            <span>تلگرام</span>
          </a>
          <a href="#" className="item">
            <img src="/images/social-mdia/whatsapp.png" alt="" />
            <span>واتساپ</span>
          </a>
          <a href="#" className="item main">
            <img src="/images/social-mdia/instagram.png" alt="" />
            <span>اینستاگرام</span>
          </a>
        </div>
        <div className="link-box">
          <BsLink45Deg />
          <a href={link}>{link}</a>
        </div>
        <button onClick={copyLink}>کپی کردن لینک</button>
        {showAlert && <CopyAlert text={"لینک"} />} {/* نمایش CopyAlert */}
      </div>
    </div>
  );
};

export default SelectingSocialMedia;
