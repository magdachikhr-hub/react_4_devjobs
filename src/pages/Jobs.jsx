import React, { useEffect, useState } from "react";
import Card from "../components/Card";
// import data from "../data/data";
import { Link } from "react-router-dom";

function Jobs() {
  const [Jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const response = await fetch("http://localhost:3000/data");
      const jobs = await response.json();

      setJobs(jobs);
    }
    fetchJobs();
  }, []);

  console.log(Jobs);

  return (
    <>
      {Jobs.map((job) => (
        <Link to={`/jobDetails/${job.id}`}>
          <Card info={job}></Card>
        </Link>
      ))}
    </>
  );
}

export default Jobs;
