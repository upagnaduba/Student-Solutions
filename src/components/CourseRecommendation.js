import React, { useState, useEffect } from "react";
import coursesData from "./coursera.json"; // Assuming the JSON is in the same directory
import "./CourseRecommendation.css"; // Importing the CSS file

const CourseSearch = () => {
  const [input, setInput] = useState("");
  const [courses, setCourses] = useState(coursesData);

  const filterCourses = () => {
    if (input) {
      const lowercasedInput = input.toLowerCase();
      const filteredData = coursesData.filter((course) =>
        Object.keys(course).some((key) =>
          course[key].toString().toLowerCase().includes(lowercasedInput)
        )
      );
      setCourses(filteredData);
    } else {
      setCourses(coursesData);
    }
  };

  return (
    <>
      <h1>Course Recommendation</h1>
      <div className="search-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for a course"
        />
        <button onClick={filterCourses}>Search</button>
      </div>
      <div className="course-recommendation-container">
        <ul className="course-list">
          {courses.map((course, index) => (
            <li key={index} className="course-item">
              <div className="course-container">
                <div className="course-info">
                  <h2>{course["Course Name"]}</h2>
                  <p>{course["University"]}</p>
                  <p>Difficulty: {course["Difficulty Level"]}</p>
                  <p>Rating: {course["Course Rating"]}</p>
                  <p>{course["Course Description"]}</p>
                  <a
                    href={course["Course URL"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to Course
                  </a>
                  <p>Skills: {course["Skills"]}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CourseSearch;
