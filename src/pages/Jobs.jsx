import React from "react";
import Card from "../components/Card";
import data from "../data/data";
import { Link } from "react-router-dom";

function Jobs() {
  console.log(data);
  return (
    <>
      {data.map((job) => (
        <Link to={`/jobDetails/${job.id}`}>
          <Card info={job}></Card>
        </Link>
      ))}
    </>
  );
}

export default Jobs;
