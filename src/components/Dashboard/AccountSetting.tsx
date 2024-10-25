import { GrNext } from "react-icons/gr";
import { MdSwitchAccount } from "react-icons/md";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { AiFillPlusSquare } from "react-icons/ai";
import { useState } from "react";

const AccountSetting = () => {
  const [addUserSection, setAddUserSection] = useState<boolean>(true);
  return (
    <div className="account-setting">
      <div className="header">
        <MdSwitchAccount />
        <span>لیست اکانت ها</span>
        <Link to={"/panel/profile"}>
          <GrNext />
        </Link>
      </div>
      <div className="box">
        <div className="child-box user-list">
          <div className="user">
            <VscAccount />
            <div className="info">
              <span>ali kermani</span>
              <span className="phone">09832323</span>
            </div>
            <div className="delete-user">
              <FaTrashAlt />
            </div>
          </div>{" "}
          <div className="user">
            <VscAccount />
            <div className="info">
              <span>ali kermani</span>
              <span className="phone">09832323</span>
            </div>
            <div className="delete-user">
              <FaTrashAlt />
            </div>
          </div>{" "}
          <div className="user">
            <VscAccount />
            <div className="info">
              <span>ali kermani</span>
              <span className="phone">09832323</span>
            </div>
            <div className="delete-user">
              <FaTrashAlt />
            </div>
          </div>{" "}
          <div className="user">
            <VscAccount />
            <div className="info">
              <span>ali kermani</span>
              <span className="phone">09832323</span>
            </div>
            <div className="delete-user">
              <FaTrashAlt />
            </div>
          </div>{" "}
          <div className="user">
            <VscAccount />
            <div className="info">
              <span>ali kermani</span>
              <span className="phone">09832323</span>
            </div>
            <div className="delete-user">
              <FaTrashAlt />
            </div>
          </div>{" "}
          <div className="user">
            <VscAccount />
            <div className="info">
              <span>ali kermani</span>
              <span className="phone">09832323</span>
            </div>
            <div className="delete-user">
              <FaTrashAlt />
            </div>
          </div>{" "}
          <div className="user">
            <VscAccount />
            <div className="info">
              <span>ali kermani</span>
              <span className="phone">09832323</span>
            </div>
            <div className="delete-user">
              <FaTrashAlt />
            </div>
          </div>{" "}
          <div className="user">
            <VscAccount />
            <div className="info">
              <span>ali kermani</span>
              <span className="phone">09832323</span>
            </div>
            <div className="delete-user">
              <FaTrashAlt />
            </div>
          </div>{" "}
          <div className="user">
            <VscAccount />
            <div className="info">
              <span>ali kermani</span>
              <span className="phone">09832323</span>
            </div>
            <div className="delete-user">
              <FaTrashAlt />
            </div>
          </div>
        </div>
        <div className="add-user">
          {addUserSection ? (
            <div
              className="add"
              onClick={() => setAddUserSection(!addUserSection)}
            >
              <span>افزودن اکانت </span>
              <FaPlus />
            </div>
          ) : (
            <div className="input-box">
              <div className="title">افزودن اکانت </div>
              <div className="input">
                <input type="text" placeholder="اسم" />
              </div>
              <div className="input">
                <input type="text" placeholder="اسم اکانت" />
              </div>
              <div className="input">
                <input type="number" placeholder="شماره تلفن    " />
              </div>
              <div className="password">
                <input type="password" placeholder="پسورد" />
              </div>{" "}
              <div className="password">
                <input type="password" placeholder="تایید پسورد" />
              </div>
              <button>ثبت</button>
              <button onClick={() => setAddUserSection(!addUserSection)}>
                لغو
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
