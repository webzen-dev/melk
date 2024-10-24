import { RiBankCardFill, RiUserLine } from "react-icons/ri";
import { GiBeveledStar } from "react-icons/gi";
import { IoWalletSharp } from "react-icons/io5";
import { useState } from "react";

interface AccountInfoState {
  name: string;
  manager: string;
  agency: string;
  score: number;
  validity: number;
}

const AccountInfo = () => {
  const [accountInfo, setAccountInfo] = useState<AccountInfoState>({
    name: "بهنام زمانزاده",
    manager: "زمانی",
    agency: "املاک1",
    score: 9,
    validity: 23000,
  });

  const infoItems = [
    { icon: <GiBeveledStar />, label: "امتیاز شما", value: accountInfo.score },
    {
      icon: <IoWalletSharp />,
      label: "اعتبار شما",
      value: `${accountInfo.validity} تومن`,
    },
  ];

  return (
    <div className="account-info">
      <div className="box main">
        <RiBankCardFill className="sticker" />
        <div className="box profile">
          <span>
            <RiUserLine />
          </span>
          <div className="box">
            <span>خوش آمدید</span>
            <div className="username">{accountInfo.name}</div>
          </div>
        </div>
        <div className="box">
          <div className="child-box">
            <span>مدیر</span>:<span>{accountInfo.manager}</span>
          </div>
          <div className="child-box">
            <span>آژانس املاک</span>:<span>{accountInfo.agency}</span>
          </div>
        </div>
      </div>
      {infoItems.map((item, index) => (
        <div className="box" key={index}>
          {item.icon}
          <span>{item.label}</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default AccountInfo;
