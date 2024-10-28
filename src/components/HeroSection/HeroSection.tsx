import { Outlet } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="home-hero-section">
      <Outlet />
    </div>
  );
};

export default HeroSection;
