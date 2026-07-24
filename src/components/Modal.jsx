import React, { useRef, useState } from "react";

function Modal({ close }) {
  const [location, setLocation] = useState("");
  // const modalElement = useRef(null);
  // console.log(modalElement.current);

  const handleClosing = (e) => {
    // console.log(e.target);

    // if (e.target !== modalElement.current) {
    close();
    // }
  };

  return (
    <>
      <div
        className="absolute bg-[#7a7b7ccb] inset-0 flex justify-center items-center"
        onClick={handleClosing}
      >
        <div
          className="bg-white h-54.25 w-81.75"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div>
            <input
              type="search"
              placeholder="Filter by location..."
              className="border"
            />
          </div>
          <label htmlFor="fullTime">Full Time Only</label>
          <input type="checkbox" id="fullTime" />
        </div>
      </div>
    </>
  );
}

export default Modal;
