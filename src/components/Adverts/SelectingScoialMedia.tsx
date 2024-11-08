import React from "react";

type SelectingSocialMediaProps = {
  link: string;
  onClose: () => void;
};

const SelectingSocialMedia: React.FC<SelectingSocialMediaProps> = ({
  link,
  onClose,
}) => {
  const shareOnWhatsApp = `https://wa.me/?text=${link}`;
  const shareOnTelegram = `https://t.me/share/url?url=${link}`;
  const shareOnTwitter = `https://twitter.com/intent/tweet?text=${link}`;

  return (
    <div className="selecting-social-media">
      <div className="title">انتخاب رسانه اجتماعی</div>
      <div className="box">
        <a
          href={shareOnWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="item"
        >
          WhatsApp
        </a>
        <a
          href={shareOnTelegram}
          target="_blank"
          rel="noopener noreferrer"
          className="item"
        >
          Telegram
        </a>
        <a
          href={shareOnTwitter}
          target="_blank"
          rel="noopener noreferrer"
          className="item"
        >
          Twitter
        </a>
      </div>
      <div className="link-box">
        <span>لینک اشتراک‌گذاری:</span>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </div>
      <button onClick={onClose}>بستن</button>
    </div>
  );
};

export default SelectingSocialMedia;
