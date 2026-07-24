import React, { useRef } from "react";

function Modal({ close }) {
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
        ></div>
      </div>
    </>
  );
}

export default Modal;
