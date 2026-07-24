import React, { useState } from "react";
import Modal from "./Modal";

function FilterJobs(onFilter) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const { jobs, loading } = FetchJobs();
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleOpenModel = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleFilterFunction = () => {
    onFilter({ title, location, isFullTime });
  };

  // console.log(isOpen);
  console.log(title);

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
            <button
              className="bg-[#5964E0]"
              onClick={() => {
                onFilter();
              }}
            >
              search
            </button>
          </div>
        </div>
        <div>{isOpen && <Modal close={handleCloseModal}></Modal>}</div>
      </div>
    </>
  );
}

export default FilterJobs;
