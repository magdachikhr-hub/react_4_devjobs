import React from "react";
import Card from "../components/Card";
import data from "../data/data";

function Jobs() {
  console.log(data);
  return (
    <>
      {data.map((job) => (
        <Card info={job}></Card>
      ))}
    </>
  );
}

export default Jobs;
