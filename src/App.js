import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Im1 from './Images/disaster-hero-image.jpg';
import Im2 from './Images/card-1-hack.jpg';
import Im3 from './Images/card-2-hack.jpg';
import Im4 from './Images/card-3-hack.jpg';
import Im5 from './Images/card-4-hack.jpg';
import chatapp from './Images/ChatApp.png'
import GoogleTranslate from './GoogleTranslate'; // Import the Translator Component
import './AppStyles.css'; // Importing the new styles
import DashboardPage from './components/Dashboard';
import StaffManagement from './components/StaffManagement';
import AdminLogin from './Adminlogin'; // Correct path for AdminLogin
import UserLogin from './Userlogin'; // Correct path for UserLogin
import ViewAlerts from './components/ViewAlerts';
import { AlertProvider } from './context/AlertContext';
import { AuthProvider } from './context/AuthContext';
import CreateAlert from './components/createAlert';
import CreateShelter from './components/createShelter';
import ViewShelters from './components/ViewShelter'; 
import Plan from './components/Planning'; 
import About from './About';
import Governance from './Governance';
import Jobs from './Jobs';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [Im1, Im2, Im3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <AuthProvider>
      <AlertProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage 
              slides={slides} 
              currentSlide={currentSlide} 
              nextSlide={nextSlide} 
              prevSlide={prevSlide} 
            />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/dashboard/admin" element={<StaffManagement />} />
            <Route path="/dashboard/user" element={<DashboardPage />} />
            <Route path="/view-alerts" element={<ViewAlerts />} />
            <Route path="/create-alert" element={<CreateAlert />} />
            <Route path="/create-shelter" element={<CreateShelter />} />
            <Route path="/view-shelters" element={<ViewShelters />} />
            <Route path="/plan" element={<Plan/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/governance" element={<Governance/>} />
          </Routes>
        </Router>
      </AlertProvider>
    </AuthProvider>
  );
};

// Home Page Component
const HomePage = ({ slides, currentSlide, nextSlide, prevSlide }) => {
  return (
    <div style={homePageStyle}>
      <nav >
        <div >
          <h1>SafeHorizon</h1>
          <GoogleTranslate />
          <br></br>
        </div>
        <div className="navbar-links">
          <h2><Link to="/about"><button style={buttonStyle}>About Us</button></Link></h2>
          <h2><Link to="/governance"><button style={buttonStyle}>Governance</button></Link></h2>
          <h2><Link to="/jobs"><button style={buttonStyle}>Jobs</button></Link></h2>
          <h2><Link to="/admin/login"><button style={buttonStyle}>Admin Login</button></Link></h2>
          <h2><Link to="/user/login"><button style={buttonStyle}>User Login</button></Link></h2>
      
        </div>
        
      </nav>
<br></br>
      {/* Slideshow */}
      <div id="slideshow">
        <div className="slide-wrapper" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide} alt={`Slide ${index + 1}`} />
              <p className="hero-para">RESPONDING TO CONFLICTS AND CRISIS</p>
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
          <button onClick={prevSlide}>❮</button>
          <button onClick={nextSlide}>❯</button>
        </div>
      </div>

      <p className="para-class">
      Natural disaster management in India involves a proactive approach through the National Disaster Management Authority (NDMA), focusing on preparedness, mitigation, response, and recovery to minimize loss of life and property.
      </p>

      {/* Cards */}
      <div className="card-grid">
        {[Im2, Im3, Im4, Im5].map((image, index) => (
          <div className="card" key={index}>
            <img src={image} alt={`Card ${index + 2}`} className="card-one-image" />
            <div className="card-details">
              <h3 className="card-name">Revolutionizing Healthcare Resilience</h3>
              <p className="card-desc">
                Medical recovery in disaster management is a set of procedures for restoring normal operations in a hospital after a disaster.
              </p>
              <a href="#" className="card-one-button">Learn More</a>
            </div>
          </div>
        ))}
      </div>
<br></br>
      {/* Footer */}
      <footer className="footer">© 2025 -TechnoCrafter All rights reserved.
        <br></br>
    
     QR FOR APP -
     <br></br>
      <img src={chatapp} alt="Proven Track Record" className="card-one-image" style={{ width: '200px', height: 'auto' }} />
      </footer>
    </div>
  );
};

const homePageStyle = {
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

// Button Styling
const buttonStyle = {
  margin: '10px',
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#00796b',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default App;
