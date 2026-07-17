import React from "react";
import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams("/:id");
  console.log(id);

  return <></>;
}

export default JobDetails;
