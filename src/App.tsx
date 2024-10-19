import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Menu from "./components/Menu";
import AdvertsContainer from "./components/Adverts/AdvertsContainer";
import "./styles/style.css";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adverts" element={<AdvertsContainer />} />
        <Route path="/panel" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
