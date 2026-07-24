import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
// import data from "../data/data";
import { Link } from "react-router-dom";
import FilterJobs from "../components/FilterJobs";

function Jobs() {
  // const [Jobs, setJobs] = useState([]);

  const filterHandler = ({ position, location, contract }) => {
    const result = jobs.filter((job) => {
      console.log(job);
      let positionMatches = job.position.toLowerCase().includes(position);
      let locationMatches = jobs.location.toLowerCase().includes(location);
      let isFullTime = job.contract === contract;

      positionMatches && locationMatches && isFullTime;

      setFilteredJobs(results);

      return result;
    });
  };

  // filterHandler();

  return (
    <>
      <FilterJobs onFilter={filterHandler}></FilterJobs>
      {Jobs.map((job, index) => (
        <Link to={`/jobDetails/${job.id}`} key={index}>
          <Card info={job}></Card>
        </Link>
      ))}
    </>
  );
}

export default Jobs;
