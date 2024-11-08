import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "./styles/style.css";
import Home from "./components/home/Home";
import Menu from "./components/Menu";
import AdvertsContainer from "./components/Adverts/AdvertsContainer";
import Dashboard from "./components/Dashboard/Dashboard";
import ManageAccount from "./components/Dashboard/ManageAccount";
import TransactionBox from "./components/Dashboard/TransactionBox";
import AccountSetting from "./components/Dashboard/AccountSetting";
import HeroSection from "./components/HeroSection/HeroSection";
import FirstPage from "./components/HeroSection/FirstPage";
import StepTwo from "./components/HeroSection/StepTwo";
import VerificationCode from "./components/HeroSection/VerificationCode";
import DesktopHome from "./components/DesktopComponent/DesktopHome";
import AdvertDetail from "./components/DesktopComponent/AdvertDetail";
import TickerContainer from "./components/Tickets/TicketsContainer";

function App() {
  const [goToApp, setGoToApp] = useState(false);
  return (
    <div className="App">
      {goToApp && <Menu />}{" "}
      <Routes>
        {!goToApp ? (
          <Route path="/*" element={<HeroSection />}>
            <Route index element={<FirstPage />} />
            <Route path="step-two" element={<StepTwo />} />
            <Route
              path="step-three"
              element={<VerificationCode setGoToApp={setGoToApp} />}
            />
          </Route>
        ) : (
          <>
            {/* for desktop app : */}
            {/* <Route path="/" element={<DesktopHome />} /> */}
            <Route path="/adverts/:code" element={<AdvertDetail />} />

            {/* for mobile app :  */}
            <Route path="/" element={<Home />} />
            <Route path="/adverts" element={<AdvertsContainer />} />
            <Route path="/panel" element={<Dashboard />} />
            <Route path="/panel/profile" element={<ManageAccount />} />
            <Route
              path="/panel/profile/transaction-list"
              element={<TransactionBox />}
            />
            <Route
              path="/panel/profile/add-user"
              element={<AccountSetting />}
            />
            <Route path="/panel/tickets" element={<TickerContainer />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
