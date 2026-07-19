import React from "react";

function Info(props) {
  return (
    <>
      <div>
        <div>
          <div>
            <span>{props.posted}</span>
            <span>
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
          <button>Apply Now</button>
        </div>
        <p>{props.description}</p>
        <div>
          <h3>Requirements</h3>
          <p>{props.content}</p>
          <div>
            <ul className="list-disc">
              {props.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3>What You Will Do</h3>
          <p>{props.roleContent}</p>
          <div>
            <ol className="list-decimal">
              {props.roleItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
