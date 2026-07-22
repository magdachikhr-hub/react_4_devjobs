import React from "react";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
// import Test from "./components/Test";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header></Header>
      <main className="bg-[#F4F6F8] min-h-screen pl-6 pr-6 sm:pl-10 sm:pr-10">
        <Routes>
          <Route path="/" element={<Jobs></Jobs>}></Route>
          <Route
            path="/jobdetails/:id"
            element={<JobDetails></JobDetails>}
          ></Route>
        </Routes>
      </main>
      <Footer></Footer>
      {/* <Test></Test> */}
    </>
  );
}
