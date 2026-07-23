import React, { useState } from "react";
import Modal from "./Modal";

function FilterJobs() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModel = () => {
    setIsOpen(true);
  };
  console.log(isOpen);

  return (
    <>
      <div>
        <div className="flex ">
          <input type="search" className="bg-white" />
          <div>
            <button className="bg-[#5964E0]" onClick={handleOpenModel}>
              search
            </button>
          </div>
        </div>
        <div>{isOpen && <Modal></Modal>}</div>
      </div>
    </>
  );
}

export default FilterJobs;
