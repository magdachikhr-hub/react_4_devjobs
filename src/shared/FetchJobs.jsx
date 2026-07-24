import React, { useState } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function FetchJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchJobs() {
      const response = await axios.get("http://localhost:3000/data");
      console.log(response);

      setJobs(response.data);
      setLoading(false);
      console.log(response.data);
    }
    fetchJobs();
  }, []);

  console.log(jobs);

  return <></>;
}

export default FetchJobs;
