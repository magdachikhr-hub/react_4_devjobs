import React from "react";

function Card({ info }) {
  console.log(info);

  return (
    <>
      <div className="bg-white w-81.75 pl-8 pt-12.25 pb-8 ">
        <div className={`w-12.5 h-12.5 bg-${info.logoBackground}`}>
          <img src={info.logo} alt="" />
        </div>
        <div>
          <div>
            <span>{info.postedAt}</span>
            <span></span>
            <span>{info.contract}</span>
          </div>
          <div>
            <h3>{info.position}</h3>
            <span>{info.company}</span>
            <span>{info.location}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
