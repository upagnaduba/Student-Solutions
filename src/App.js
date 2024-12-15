import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CourseRecommendation from "./components/CourseRecommendation";
import ConsistencyDevelopment from "./components/ConsistencyDevelopment";
import CodingPractice from "./components/CodingPractice";
import BookSharing from "./components/BookSharing";
import DoubtClearance from "./components/DoubtClearance";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course-recommendation"
          element={<CourseRecommendation />}
        />
        <Route
          path="/consistency-development"
          element={<ConsistencyDevelopment />}
        />
        <Route path="/coding-practice" element={<CodingPractice />} />
        <Route path="/book-sharing" element={<BookSharing />} />
        <Route path="/doubt-clearance" element={<DoubtClearance />} />
      </Routes>
    </Router>
  );
}

export default App;
