import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
// import data from "../data/data";
import { Link } from "react-router-dom";

function Jobs() {
  const [Jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const response = await axios.get("http://localhost:3000/data");

      setJobs(response.data);
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
