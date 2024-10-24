import { FaArrowLeft, FaRegUserCircle } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { useEffect, useState } from "react";

const SettingsRouting = () => {
  const [accountId, setAcountId] = useState<number>(22324343);
  useEffect(() => {
    // set user id in this state:
    setAcountId(22222223);
  }, []);
  return (
    <div className="setting-routing">
      <div className="box">
        <RiSecurePaymentFill className="icon" />
        <span>کد کاربری</span>
        <div className="code">{accountId}</div>
      </div>
      <Link className="box" to={"/panel/profile"}>
        <FaRegUserCircle className="icon" />
        <span>پروفایل کاربری</span>
        <FaArrowLeft />
      </Link>{" "}
      <Link className="box" to={"/panel/tickets"}>
        <AiOutlineMessage className="icon" />
        <span> تیکت های شما</span>
        <FaArrowLeft />
      </Link>
      <Link className="box" to={"/panel/adverts"}>
        <MdOutlineMapsHomeWork className="icon" />
        <span> اگهی های شما</span>
        <FaArrowLeft />
      </Link>
      <button className="box">خروج از حساب</button>
    </div>
  );
};

export default SettingsRouting;
