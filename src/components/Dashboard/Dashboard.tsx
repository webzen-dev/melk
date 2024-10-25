import { Routes, Route } from "react-router-dom"; 
import AccountInfo from "./AccountInfo";
import DashboardHeader from "./DashboardHeader";
import SettingsRouting from "./SettingsRouting";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <AccountInfo />
      <SettingsRouting />

    </div>
  );
};

export default Dashboard;
