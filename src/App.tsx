import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Menu from "./components/Menu";
import AdvertsContainer from "./components/Adverts/AdvertsContainer";
import "./styles/style.css";
import Dashboard from "./components/Dashboard/Dashboard";
import ManageAccount from "./components/Dashboard/ManageAccount";
import TransactionBox from "./components/Dashboard/TransactionBox";
import AccountSetting from "./components/Dashboard/AccountSetting";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adverts" element={<AdvertsContainer />} />
        <Route path="/panel" element={<Dashboard />} />
        <Route path="/panel/profile" element={<ManageAccount />} />
        <Route
          path="/panel/profile/transaction-list"
          element={<TransactionBox />}
        />        <Route
        path="/panel/profile/add-user"
        element={<AccountSetting />}
      />
      </Routes>
    </div>
  );
}

export default App;
