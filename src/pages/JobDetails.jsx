import React, { useEffect, useState } from "react";
// import Jobs from "../data/data";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import Info from "../components/Info";
import axios from "axios";

function JobDetails() {
  const { id } = useParams("/:id");
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getJob() {
      try {
        const response = await fetch(`http://localhost:3000/data/${id}`);
        const data = await response.json();

        setSelectedJob(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getJob();
  }, [id]);

  console.log(selectedJob);

  if (loading) return <p>loading...</p>;

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
