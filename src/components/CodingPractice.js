import React from "react";
import "./CodingPractice.css"; // Import your CSS file for styling
import HackerRankLogo from "../assets/hackerrank.png";
import EdxLogo from "../assets/edx.png";
import GeekLogo from "../assets/geek.png";
import CodeChefLogo from "../assets/codechef.png";

const CodingPractice = () => {
  const codingWebsites = [
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/",
      imageUrl: HackerRankLogo,
    },
    {
      name: "edX",
      url: "https://www.edx.org/",
      imageUrl: EdxLogo,
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/",
      imageUrl: GeekLogo,
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/",
      imageUrl: CodeChefLogo,
    },
    // Add more coding practice websites with their image imports as needed
  ];

  return (
    <div className="coding-practice-container">
      <h1>Coding Practice</h1>
      <p>Explore these websites for coding practice:</p>
      <ul className="coding-websites-list">
        {codingWebsites.map((website, index) => (
          <li key={index} className="coding-website-item">
            <h2>{website.name}</h2>
            <a href={website.url} target="_blank" rel="noopener noreferrer">
              <img src={website.imageUrl} alt={`${website.name} Logo`} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodingPractice;
