import React, { useState } from "react";
import Modal from "./Modal";

function FilterJobs() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const handleOpenModel = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  console.log(isOpen);

  return (
    <>
      <div>
        <div className="flex ">
          <input
            type="search"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="enter job title"
            className="bg-white w-full h-20 -mt-10 "
          />
          <div>
            <button className="bg-white" onClick={handleOpenModel}>
              filter
            </button>
            <button className="bg-[#5964E0]">search</button>
          </div>
        </div>
        <div>{isOpen && <Modal close={handleCloseModal}></Modal>}</div>
      </div>
    </>
  );
}

export default FilterJobs;
