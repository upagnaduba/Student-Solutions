import React from "react";
import "./BookSharing.css"; // Import your CSS file for styling
import book1 from "../assets/img1.png"; // Sample image URL
import book2 from "../assets/img2.png"; // Sample image URL
import book3 from "../assets/img3.png"; // Sample image URL
import book4 from "../assets/img4.png"; // Sample image URL
import book5 from "../assets/img5.png"; // Sample image URL
import book6 from "../assets/img6.png"; // Sample image URL
import book7 from "../assets/img7.png"; // Sample image URL
import book8 from "../assets/img8.png"; // Sample image URL
import book9 from "../assets/img9.png"; // Sample image URL

// Sample book data with titles, URLs, and images
const sampleBooks = [
  {
    title: "Python",
    url: "https://docs.python.org/3/",
    imageUrl: book1,
  },
  {
    title: "React",
    url: "https://reactjs.org/docs/getting-started.html",
    imageUrl: book2,
  },
  {
    title: "Java",
    url: "https://docs.oracle.com/javase/8/docs/",
    imageUrl: book3,
  },
  {
    title: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    imageUrl: book4,
  },
  {
    title: "C++",
    url: "https://en.cppreference.com/w/",
    imageUrl: book5,
  },
  {
    title: "Ruby",
    url: "https://www.ruby-lang.org/en/documentation/",
    imageUrl: book6,
  },
  {
    title: "Go",
    url: "https://golang.org/doc/",
    imageUrl: book7,
  },
  {
    title: "Swift",
    url: "https://developer.apple.com/documentation/swift",
    imageUrl: book8,
  },
  {
    title: "Kotlin",
    url: "https://kotlinlang.org/docs/reference/",
    imageUrl: book9,
  },
];

const BookSharing = () => {
  const handleBookSelect = (selectedLink) => {
    window.open(selectedLink, "_blank"); // Open the book link in a new tab
  };

  return (
    <div className="book-sharing-container">
      <h1>Book Sharing</h1>
      <div className="sample-books">
        <h2>Sample Books:</h2>
        <ul className="book-list">
          {sampleBooks.map((book, index) => (
            <li key={index} className="book-item">
              <button
                onClick={() => handleBookSelect(book.url)}
                className="book-button"
              >
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="book-image"
                />
                <div className="book-details">
                  <span className="book-title">{book.title}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookSharing;
