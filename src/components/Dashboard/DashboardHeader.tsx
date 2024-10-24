import { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";

const DashboardHeader = () => {
  const [newMessage, setNewMessage] = useState<boolean>(false);
  // If it has a new message, this will be true
  // Use useEffect to update the state when the component mounts
  useEffect(() => {
    setNewMessage(true); // Simulate receiving a new message
  }, []); // Empty dependency array means it runs once after the component mounts
  return (
    <div className="header">
      <div className="title">املاک یاس</div>
      <div className="ticket">
        {newMessage && <div className="sticker" />}
        <span>تیکت ها</span>
        <FaRegBell />
      </div>
    </div>
  );
};

export default DashboardHeader;
