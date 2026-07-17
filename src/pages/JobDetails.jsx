import React from "react";
import Jobs from "../data/data";
import { useParams } from "react-router-dom";
import Title from "../components/Title";

function JobDetails() {
  const { id } = useParams("/:id");
  // console.log(id);
  // console.log(Jobs);
  const selectedJob = Jobs.find((job) => {
    return job.id === Number(id);
  });
  console.log(selectedJob);

  const {
    logo,
    company,
    logoBackground,
    position,
    postedAt,
    requirements,
    role,
    website,
    location,
    apply,
    contract,
    description,
  } = selectedJob;

  return (
    <>
      <Title
        img={logo}
        company={company}
        webLink={website}
        color={logoBackground}
      ></Title>
    </>
  );
}

export default JobDetails;
