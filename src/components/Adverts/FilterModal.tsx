import { IoFilter } from "react-icons/io5";
import FilterTriggerModal from "./FilterTriggerModal";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
const FilterModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div
      className="filter-modal"
      onClick={(): void => setShowModal(!showModal)}
    >
      <p>
        فیتلر
        {showModal ? <IoMdClose /> : <IoFilter />}
      </p>
      {showModal && <FilterTriggerModal />}
    </div>
  );
};

export default FilterModal;
