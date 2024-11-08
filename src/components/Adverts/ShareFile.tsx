import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import SelectingSocialMedia from "./SelectingScoialMedia";

type ShareFileProps = {
  onClose: () => void;
};

const ShareFile: React.FC<ShareFileProps> = ({ onClose }) => {
  const [nextStep, setNextStep] = useState<boolean>(true);

  return (
    <div className="share-file-box">
      {nextStep === true ? (
        <div className="box">
          <header>
            <div className="title">اشتراک گذاری فایل</div>
            <IoMdClose onClick={onClose} />
          </header>
          <div className="child-box">
            <label>
              <input type="checkbox" className="myCheckbox" />
              نمایش توضیحات
            </label>
            <label>
              <input type="checkbox" className="myCheckbox" />
              نمایش آدرس
            </label>
            <label>
              <input type="checkbox" className="myCheckbox" />
              نمایش تصاویر
            </label>
            <label>
              <input type="checkbox" className="myCheckbox" />
              نمایش فایل های مشابه
            </label>
            <label>
              <input type="checkbox" className="myCheckbox" />
              نمایش مبلغ
            </label>
          </div>
          <button onClick={() => setNextStep(false)}>اشتراک گذاری فایل</button>
        </div>
      ) : (
        <SelectingSocialMedia onClose={() => onClose()} />
      )}
    </div>
  );
};

export default ShareFile;
