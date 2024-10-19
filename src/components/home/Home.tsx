import HomeBox from "./HomeBox";
import HomeContainer from "./HomeContainer";
import PropertyHomeFileList from "./PropertyHomeFileList";
const Home = () => {
  return (
    <div className="home-page">
      <HomeContainer />
      <PropertyHomeFileList />
      <HomeBox />
    </div>
  );
};

export default Home;
