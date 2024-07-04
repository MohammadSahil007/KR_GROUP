import React, { useState } from 'react';
import './Footer.css'; // Make sure to import the CSS file

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with email:', email);

    try {
      const response = await fetch('http://localhost:5000/api/subscribe', { // Make sure this URL matches your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.success) {
        setMessage('Subscription successful!');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('There was an error with the fetch operation:', error);
      setMessage('Subscription failed. Please try again.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-heading">INFO</h4>
          <ul className="footer-list">
            <li>Formats</li>
            <li>Compression</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">RESOURCES</h4>
          <ul className="footer-list">
            <li>Developer API</li>
            <li>Tools</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">COMPANY</h4>
          <ul className="footer-list">
            <li>About Us</li>
            <li>Sustainability</li>
            <li>Terms of Service</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Subscribe to our email newsletter</h4>
          <form className="footer-subscribe" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ color: 'black' }}
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
          {message && <p>{message}</p>}
          <h4 className="footer-heading">Follow us</h4>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <p style={{color:'#9999',display:'block',paddingTop:20,fontSize:14,textAlign:'left',margin: 0,padding:0}}>Developed by  <a style={{color:'#fffd'}} href=""></a></p>

        </div>

        
      </div>
      {//<p style={{display:'block',textAlign:'center',background:'grey',margin:0,padding:0}}>&copy; 2024 KR Enterprises Design by Mohammad Sahil <a hred="https://www.linkedin.com/in/mohammad-sahil-ansari-b0985b269/">(LinkedIn)</a></p>
      }
    </footer>
  );
}
