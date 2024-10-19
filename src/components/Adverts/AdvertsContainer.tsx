import AdvertsBox from "./AdvertsBox";
import AdvertsHeroSecton from "./AdvertsHeroSecton";
import FilterModal from "./FilterModal";

const AdvertsContainer = () => {
  return (
    <div className="adverts-container">
      <AdvertsHeroSecton />
      <FilterModal />
      <AdvertsBox />
    </div>
  );
};

export default AdvertsContainer;
