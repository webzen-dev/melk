import { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  const [newMessage, setNewMessage] = useState<boolean>(false);
  // If it has a new message, this will be true
  // Use useEffect to update the state when the component mounts
  useEffect(() => {
    setNewMessage(true);
  }, []);
  return (
    <div className="header">
      <div className="title">املاک یاس</div>
      <div className="ticket">
        {newMessage && <div className="sticker" />}
        <Link to={"/panel/tickets"}>
          <span>تیکت ها</span>
        </Link>
        <FaRegBell />
      </div>
    </div>
  );
};

export default DashboardHeader;
