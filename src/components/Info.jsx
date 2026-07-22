import React from "react";

function Info(props) {
  return (
    <>
      <div className="flex flex-col items-center mt-6">
        <div className=" w-81.75 bg-white pt-10 pb-10 pl-6 pr-6 rounded-md">
          <div>
            <div className="flex items-end gap-3 ">
              <span>{props.posted}</span>
              <span className="mb-1.25">
                <svg
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2" cy="2" r="2" fill="#6E8098" />
                </svg>
              </span>
              <span>{props.contract}</span>
            </div>
            <div>
              <h2>{props.position}</h2>
              <span>{props.location}</span>
            </div>
            <button className="w-69.75 h-12 rounded-[5px] bg-[#5964E0] font-bold text-white mt-12.5 mb-8">
              Apply Now
            </button>
          </div>
          <p>{props.description}</p>
          <div>
            <h3 className="mt-10 mb-7 font-bold text-[#19202D] text-[20px]">
              Requirements
            </h3>
            <p className="mb-8">{props.content}</p>
            <div>
              <ul className="list-disc marker:text-[#5964E0] ">
                {props.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="mt-10 mb-7 font-bold text-[#19202D] text-[20px] ">
              What You Will Do
            </h3>
            <p className="mb-8">{props.roleContent}</p>
            <div>
              <ol className="list-decimal marker:text-[#5964E0] marker:font-bold">
                {props.roleItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
