import React from 'react';
import './dash.css'; // Assuming you have a CSS file for styles
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const TrainingSections = () => {
  return (
    <div>
        <div>
      <Link to="/dashboard/user">
        <Button variant="contained" color="primary">
          Dashboard
        </Button>
      </Link>
     </div>
      <section className="earthquake-training">
        <h2>Earthquake Training & Drills</h2>
        <p>Learn essential steps to protect yourself during an earthquake.</p>
        <div className="training-container">
          <div className="training-item">
            <h3>Drop, Cover, and Hold</h3>
            <p>During an earthquake, immediately drop to the ground, take cover under a sturdy table, and hold on until the shaking stops.</p>
          </div>
          <div className="training-item">
            <h3>Safe Evacuation Routes</h3>
            <p>Identify and practice using safe exit routes in buildings to evacuate efficiently and avoid falling objects.</p>
          </div>
          <div className="training-item">
            <h3>Emergency Kit Preparation</h3>
            <p>Assemble a survival kit with food, water, a flashlight, batteries, first aid supplies, and important documents.</p>
          </div>
          <div className="training-item">
            <h3>Building Safety Measures</h3>
            <p>Secure heavy furniture, appliances, and objects to prevent them from falling during an earthquake.</p>
          </div>
          <div className="training-item">
            <h3>Post-Earthquake Safety</h3>
            <p>After an earthquake, check for injuries, avoid damaged buildings, and listen to emergency updates.</p>
          </div>
        </div>
        <button className="cta-btn">Join Earthquake Training</button>
      </section>

      <section className="fire-safety">
        <h2>Fire Safety Training & Drills</h2>
        <p>Learn essential fire safety techniques to protect yourself and others in an emergency.</p>
        <div className="fire-training-container">
          <div className="fire-training-item">
            <h3>🔥 Fire Prevention Measures</h3>
            <p>Identify potential fire hazards and take preventive actions.</p>
          </div>
          <div className="fire-training-item">
            <h3>🚪 Emergency Exit Plan</h3>
            <p>Understand fire escape routes and practice safe evacuation.</p>
          </div>
          <div className="fire-training-item">
            <h3>🧯 Using Fire Extinguishers</h3>
            <p>Learn the PASS technique (Pull, Aim, Squeeze, Sweep) to control small fires.</p>
          </div>
          <div className="fire-training-item">
            <h3>🔥 Stop, Drop & Roll</h3>
            <p>Practice this method if your clothes catch fire.</p>
          </div>
          <div className="fire-training-item">
            <h3>🚨 Evacuation Procedures</h3>
            <p>Stay low in smoke, follow exit signs, and never use elevators.</p>
          </div>
        </div>
        <button className="cta-btn">Join Fire Safety Drill</button>
      </section>

      <section className="flood-drill">
        <h2>Flood Evacuation Drills</h2>
        <p>Prepare for floods with proper evacuation steps to ensure safety.</p>
        <div className="drill-container">
          <div className="drill-item">
            <h3>📢 Stay Informed</h3>
            <p>Monitor weather updates and alerts from authorities.</p>
          </div>
          <div className="drill-item">
            <h3>🎒 Prepare an Emergency Kit</h3>
            <p>Include food, water, flashlight, first aid, and important documents.</p>
          </div>
          <div className="drill-item">
            <h3>🗺️ Know Evacuation Routes</h3>
            <p>Plan and practice safe routes to higher ground.</p>
          </div>
          <div className="drill-item">
            <h3>⛰️ Move to Higher Ground</h3>
            <p>Avoid low-lying areas and flooded streets.</p>
          </div>
          <div className="drill-item">
            <h3>⚡ Turn Off Utilities</h3>
            <p>Shut off gas, electricity, and water to prevent accidents.</p>
          </div>
          <div className="drill-item">
            <h3>🚨 Follow Official Instructions</h3>
            <p>Listen to emergency broadcasts and evacuation orders.</p>
          </div>
        </div>
        <button className="cta-btn">Join the Flood Drill</button>
      </section>

      <section className="cyclone-training">
        <h2>Cyclone Preparedness Training & Drill</h2>
        <p>Be ready for cyclones with essential training on safety, evacuation, and preparedness.</p>
        <div className="training-container">
          <div className="training-item">
            <h3>Understanding Cyclones</h3>
            <p>Learn how cyclones form, their impact, and early warning signals.</p>
          </div>
          <div className="training-item">
            <h3>Pre-Cyclone Preparedness</h3>
            <p>Secure your home, reinforce windows, and store essential supplies.</p>
          </div>
          <div className="training-item">
            <h3>Emergency Kit Essentials</h3>
            <p>Pack food, water, medications, flashlights, and important documents.</p>
          </div>
          <div className="training-item">
            <h3>Evacuation Plans</h3>
            <p>Identify safe zones, emergency shelters, and practice evacuation drills.</p>
          </div>
          <div className="training-item">
            <h3>Post-Cyclone Safety</h3>
            <p>Avoid flooded areas, check for structural damage, and follow official updates.</p>
          </div>
        </div>
        <button className="cta-btn">Join Cyclone Training</button>
      </section>

      <section className="tsunami-training">
        <h2>Tsunami Response Training</h2>
        <p>Prepare yourself and your community for tsunami emergencies with expert training.</p>
        <div className="training-container">
          <div className="training-item">
            <h3>Early Warning Signs</h3>
            <p>Recognize earthquake tremors, sudden ocean withdrawals, and unusual wave behavior.</p>
          </div>
          <div className="training-item">
            <h3>Evacuation Routes</h3>
            <p>Identify high ground areas and practice safe evacuation routes in advance.</p>
          </div>
          <div className="training-item">
            <h3>Emergency Kits</h3>
            <p>Ensure you have food, water, first-aid supplies, and essential documents ready.</p>
          </div>
          <div className="training-item">
            <h3>Safe Shelters</h3>
            <p>Know the designated tsunami shelters in your area and their safety guidelines.</p>
          </div>
          <div className="training-item">
            <h3>Community Preparedness</h3>
            <p>Participate in community drills and disaster awareness programs for better coordination.</p>
          </div>
        </div>
        <button className="cta-btn">Join the Tsunami Training Program</button>
      </section>

      <section className="pandemic-training">
        <h2>Pandemic Safety Measures Training</h2>
        <p>Prepare yourself with essential safety protocols to prevent the spread of infections.</p>
        <div className="training-container">
          <div className="training-item">
            <h3>Proper Handwashing</h3>
            <p>Learn the 20-second handwashing technique to eliminate germs.</p>
          </div>
          <div className="training-item">
            <h3>Social Distancing</h3>
            <p>Understand the importance of maintaining a safe distance in public spaces.</p>
          </div>
          <div className="training-item">
            <h3>Proper Mask Usage</h3>
            <p>Know the correct way to wear, remove, and dispose of masks safely.</p>
          </div>
          <div className="training-item">
            <h3>Sanitization Procedures</h3>
            <p>Follow proper disinfection methods for surfaces and frequently touched items.</p>
          </div>
          <div className="training-item">
            <h3>Emergency Response Plan</h3>
            <p>Understand what to do if you or someone near you shows symptoms.</p>
          </div>
        </div>
        <button className="cta-btn">Join Training Session</button>
      </section>
    </div>
  );
};

export default TrainingSections;