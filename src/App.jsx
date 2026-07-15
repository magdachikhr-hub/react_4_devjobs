import React from "react";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Jobs></Jobs>}></Route>
        <Route path="/jobdetails" element={<JobDetails></JobDetails>}></Route>
      </Routes>
    </>
  );
}
