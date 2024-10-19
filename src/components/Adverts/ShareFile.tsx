import { IoMdClose } from "react-icons/io";

type ShareFileProps = {
  onClose: () => void;
};

const ShareFile: React.FC<ShareFileProps> = ({ onClose }) => {
  return (
    <div className="share-file-box">
      <div className="box">
        <header>
          <div className="title">اشتراک گذاری فایل</div>
          <IoMdClose onClick={onClose} />
        </header>
        <div className="child-box">
          <label>
            <input type="checkbox" id="myCheckbox" />
            نمایش توضیحات
          </label>
          <label>
            <input type="checkbox" id="myCheckbox" />
            نمایش آدرس
          </label>
          <label>
            <input type="checkbox" id="myCheckbox" />
            نمایش تصاویر
          </label>
          <label>
            <input type="checkbox" id="myCheckbox" />
            نمایش فایل های مشابه
          </label>
          <label>
            <input type="checkbox" id="myCheckbox" />
            نمایش مبلغ
          </label>
        </div>
        <button>اشتراک گذازی فایل</button>
      </div>
    </div>
  );
};

export default ShareFile;
