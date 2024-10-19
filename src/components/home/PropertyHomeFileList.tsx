import { useState } from "react";

const PropertyHomeFileList = () => {
  const [numberOfFiles, setNumberOfFiles] = useState<number>(0);
  const [NumberOfUpdatedFiles, setNumberOfUpdatedFiles] = useState<number>(243);
  const [numberOfDeletedFiles, setNumberOfDeletedFiles] = useState<number>(10);
  const [NumberOfHotFiles, setNumberOfHotFiles] = useState<number>(212);
    
  return (
    <div className="home-file-list">
      <div className="title">سبد فایل های پلاس</div>
      <div className="box-list">
        <a href="" className="box-item">
          <div className="image">
            {numberOfFiles > 0 && <span>{numberOfFiles}</span>}
            <img src="/images/file.png" alt="file icon" />
          </div>
          <span>فایلینگ</span>
        </a>

        <a href="" className="box-item">
          <div className="image">
            {NumberOfUpdatedFiles > 0 && <span>{NumberOfUpdatedFiles}</span>}
            <img src="/images/update-file.png" alt="file icon" />
          </div>
          <span>فایلینگ به روزرسانی</span>
        </a>

        <a className="box-item">
          <div className="image">
            {numberOfDeletedFiles > 0 && <span>{numberOfDeletedFiles}</span>}
            <img src="/images/file-delete.png" alt="file icon" />
          </div>
          <span>فایلینگ حذف شده</span>
        </a>

        <a href="#" className="box-item">
          <div className="image">
            {NumberOfHotFiles > 0 && <span>{NumberOfHotFiles}</span>}
            <img src="/images/hot-article.png" alt="file icon" />
          </div>
          <span>فایل داغ</span>
        </a>
      </div>
    </div>
  );
};

export default PropertyHomeFileList;
