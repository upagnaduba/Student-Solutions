import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <img src="/images/banner.jpg" alt="StudentSol Banner" className="banner-image" />

      <section className="section">
        <h1>Welcome to StudentSolutions</h1>
        <p>

Welcome to StudentSol, your comprehensive platform dedicated to empowering students on their educational journey. Whether you're looking to enhance your skills, share knowledge, or explore new opportunities, StudentSol is here to support you every step of the way.

Your Platform for Learning, Sharing, and Growing as a Student!.</p>
      </section>

      <section className="section">
        <h2>Explore Our Features</h2>

        <div className="feature">
          <img src="/images/recommendation.jpeg" alt="Course Recommendation" />
          <div className="feature-info">
            <h3>Course Recommendation</h3>
            <p>Thinking About where to find the best course. This feature helps you!</p>
          </div>
        </div>

        <div className="feature">
          <img src="/images/coding.jpeg" alt="Coding Practice" />
          <div className="feature-info">
            <h3>Coding Practice</h3>
            <p>Be the fist to learn. Practice coding</p>
          </div>
        </div>

        <div className="feature">
          <img src="/images/book.jpeg" alt="Book Sharing" />
          <div className="feature-info">
            <h3>Book Sharing</h3>
            <p>Discover and share recommended books to expand your knowledge.</p>
          </div>
        </div>

        <div className="feature">
          <img src="/images/Consistency.jpeg" alt="Consistency Development" />
          <div className="feature-info">
            <h3>Consistency Development</h3>
            <p>Thinking how to learn Consistently.Try this feature, It will sure help you</p>
          </div>
        </div>

        {/* Add more features as needed */}
      </section>

      <section className="section">
        <h2>About Us</h2>
        <p>We are dedicated to providing a comprehensive platform where students can find the best resources for learning and practicing coding, sharing insightful books, clearing doubts, and more.</p>
      </section>

      <section className="section">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to reach out to us at <a href="mailto:support@studentsol.com">support@studentsol.com</a>.</p>
      </section>
    </div>
  );
};

export default Home;
