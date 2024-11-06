import { IoMdClose } from "react-icons/io";
import { useState } from "react";

type ShareFileProps = {
  onClose: () => void;
  onShare: (link: string) => void;
};

const ShareFile: React.FC<ShareFileProps> = ({ onClose, onShare }) => {
  // استیت‌ها برای ذخیره انتخاب‌های کاربر
  const [showDescription, setShowDescription] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [showSimilarFiles, setShowSimilarFiles] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  // تابع ایجاد لینک اشتراک‌گذاری بر اساس انتخاب‌های کاربر
  const generateShareLink = () => {
    let link = "https://kiri.com/adv=23ei34fh7up";
    link += showDescription ? "&desc=true" : "";
    link += showAddress ? "&addr=true" : "";
    link += showImages ? "&img=true" : "";
    link += showSimilarFiles ? "&similar=true" : "";
    link += showPrice ? "&price=true" : "";
    return link;
  };

  const handleShareClick = () => {
    const link = generateShareLink();
    onShare(link);  // فراخوانی تابع ارسال لینک برای اشتراک‌گذاری
  };

  return (
    <div className="share-file-box">
      <div className="box">
        <header>
          <div className="title">اشتراک‌گذاری فایل</div>
          <IoMdClose onClick={onClose} />
        </header>
        <div className="child-box">
          <label>
            <input
              type="checkbox"
              checked={showDescription}
              onChange={() => setShowDescription(!showDescription)}
            />
            نمایش توضیحات
          </label>
          <label>
            <input
              type="checkbox"
              checked={showAddress}
              onChange={() => setShowAddress(!showAddress)}
            />
            نمایش آدرس
          </label>
          <label>
            <input
              type="checkbox"
              checked={showImages}
              onChange={() => setShowImages(!showImages)}
            />
            نمایش تصاویر
          </label>
          <label>
            <input
              type="checkbox"
              checked={showSimilarFiles}
              onChange={() => setShowSimilarFiles(!showSimilarFiles)}
            />
            نمایش فایل‌های مشابه
          </label>
          <label>
            <input
              type="checkbox"
              checked={showPrice}
              onChange={() => setShowPrice(!showPrice)}
            />
            نمایش مبلغ
          </label>
        </div>
        <button onClick={handleShareClick}>اشتراک‌گذاری فایل</button>
      </div>
    </div>
  );
};

export default ShareFile;
