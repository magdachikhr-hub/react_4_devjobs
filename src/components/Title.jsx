import React from "react";
import DomainLabel from "./DomainLabel";

function Title(props) {
  return (
    <>
      <div className="flex flex-col ">
        <div>
          <div
            className="h-12.5 w-12.5 flex items-center rounded-[15px]"
            style={{ backgroundColor: props.color }}
          >
            <img className="w-full" src={props.img} alt="" />
          </div>
        </div>
        <div>
          <h3>{props.company}</h3>
          <span>
            <DomainLabel url={props.webLink}></DomainLabel>
          </span>
        </div>
        <a href="">Company Site</a>
      </div>
    </>
  );
}

export default Title;
