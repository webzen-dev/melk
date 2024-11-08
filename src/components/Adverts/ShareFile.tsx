import { IoMdClose } from "react-icons/io";
import { useState } from "react";

type ShareFileProps = {
  onClose: () => void;
  onShare: (link: string) => void;
};

const ShareFile: React.FC<ShareFileProps> = ({ onClose, onShare }) => {
  return (
    <div className="share-file-box">
      <div className="box">
        <header>
          <div className="title">اشتراک‌گذاری فایل</div>
          <IoMdClose onClick={onClose} />
        </header>
        <div className="child-box">
          <label>
            <input type="checkbox" />
            نمایش توضیحات
          </label>
          <label>
            <input type="checkbox" />
            نمایش آدرس
          </label>
          <label>
            <input type="checkbox" />
            نمایش تصاویر
          </label>
          <label>
            <input type="checkbox" />
            نمایش فایل‌های مشابه
          </label>
          <label>
            <input type="checkbox" />
            نمایش مبلغ
          </label>
        </div>
        <button>اشتراک‌گذاری فایل</button>
      </div>
    </div>
  );
};

export default ShareFile;
