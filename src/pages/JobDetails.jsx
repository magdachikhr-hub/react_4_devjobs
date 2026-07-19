import React from "react";
import Jobs from "../data/data";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import Info from "../components/Info";

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
    content,
  } = selectedJob;

  return (
    <>
      <Title
        img={logo}
        company={company}
        webLink={website}
        color={logoBackground}
      ></Title>
      <Info
        description={description}
        posted={postedAt}
        contract={contract}
        position={position}
        location={location}
        content={requirements.content}
        items={requirements.items}
        roleContent={role.content}
        roleItems={role.items}
      ></Info>
    </>
  );
}

export default JobDetails;
