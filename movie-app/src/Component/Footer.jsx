import React from 'react';
import './Footer.css'; // Import your CSS file for styling

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
         
          <div className="contact-info">
            <p>Contact us: example@example.com</p>
          </div>
          <div className="social-media">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Movie Book App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

