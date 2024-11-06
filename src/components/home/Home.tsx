import { CgProfile } from "react-icons/cg";
import {
  GrDocumentStore,
  GrDocumentTime,
  GrDocumentUpdate,
  GrGroup,
} from "react-icons/gr";
import { PiOfficeChairThin } from "react-icons/pi";
import { TbHomeDollar } from "react-icons/tb";
import { LiaFileContractSolid } from "react-icons/lia";
import { IoIosSearch, IoIosStarOutline } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { TiDocumentDelete } from "react-icons/ti";

const Home = () => {
  return (
    <div className="home-app">
      <div className="container">
        <div className="profile">
          <CgProfile />
          <div className="user">
            <span>اسم اکانت </span>
            <span>کد اکانت : 923843</span>
          </div>
        </div>
        <div className="container-box">
          <div className="item">
            دفتر مشتری
            <GrGroup />
          </div>
          <div className="item">
            دفتر فایل
            <PiOfficeChairThin />
          </div>
          <div className="item">
            اگهی پلاس
            <TbHomeDollar />
          </div>
          <div className="item">
            قرارداد های رهن و اجاره
            <LiaFileContractSolid />
          </div>
        </div>
        <button>رفتن به صفحه ی اگهی ها</button>
        <div className="input-box">
          <input type="text" placeholder="ملک مورد نظر خود را جست و جو کنید" />
          <IoIosSearch />
        </div>
        <div className="filing-lits">
          <div className="title">سبد فایل های پلاس </div>
          <div className="box">
            <div className="item">
              <span>فایلینگ</span>
              <span>
                <IoDocumentAttachOutline />
              </span>
            </div>
            <div className="item">
              <span>فایلینگ به روز روزرسانی</span>
              <span>
                <GrDocumentTime />
              </span>
            </div>
            <div className="item">
              <span>فایلینگ حذف شده</span>
              <span>
                <TiDocumentDelete />
              </span>
            </div>
            <div className="item">
              <span>فایل داغ</span>
              <span>
                <GrDocumentStore />
              </span>
            </div>
          </div>
        </div>
        <div className="account">
          <div className="box">
            <IoIosStarOutline />
            <span>۱۰ امتیاز</span>
          </div>

          <div className="code">
            <span>کد اکانت </span>
            <span>#23rfaef</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
