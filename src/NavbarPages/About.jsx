import React from 'react'
import Mainpic from '../Sources/mainpicture.jpg';
import Navbar from '../Components/NavigationBar/Navbar';
import './Css/About.css'
import Bottomfooter from '../Components/Footer/Footer';

export default function About() {
    
     

  return (
    <div>
        <Navbar/>
        <div className='About'>
        <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your home away from home</p>
      </div>

      <div className="about-content">
        <div className="about-description">
        <div className="about-image">
          <img src={Mainpic} alt="Guest House" />
        </div>
          <h2>Welcome to Our Guest House</h2>
          <p>
            At our guest house, we strive to provide a warm and inviting atmosphere for all our guests. 
            Nestled in the heart of [Location], we offer comfortable accommodations, 
            exceptional service, and a variety of amenities to make your stay memorable.
          </p>
          <p>
            Whether you're here for a weekend getaway, a family vacation, or a business trip, 
            our dedicated staff is here to ensure that your experience is nothing short of perfect.
          </p>
        </div>
      </div>

      <div className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>🏡 Comfort: We prioritize your comfort above all else.</li>
          <li>🌍 Community: We support local businesses and culture.</li>
          <li>🌱 Sustainability: We are committed to eco-friendly practices.</li>
          <li>🤝 Hospitality: Our team is dedicated to providing excellent service.</li>
        </ul>
      </div>

      <div className="about-testimonials">
        <h2>What Our Guests Say</h2>
        <blockquote>
          "An amazing stay! The staff was friendly and the atmosphere was perfect. Highly recommended!"
          <footer>- Happy Guest</footer>
        </blockquote>
        <blockquote>
          "The best guest house I have ever stayed in. I felt right at home!"
          <footer>- Satisfied Visitor</footer>
        </blockquote>
      </div>
    </div>
        </div>
        <Bottomfooter/>
        
    </div>
  )
}
