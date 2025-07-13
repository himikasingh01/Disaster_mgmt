import React from "react";
import "./style.css"; // Ensure styles are included
import {Link } from 'react-router-dom'; // Import useNavigate

const organizations = [
  {
    name: "National Disaster Management Authority (NDMA)",
    description:
      "NDMA is the apex body in India for formulating policies, plans, and guidelines for disaster management. It works to build a safer and disaster-resilient India.",
    functions: [
      "Develops disaster management policies.",
      "Coordinates with state and district authorities.",
      "Conducts awareness and training programs."
    ],
    website: "https://ndma.gov.in",
    image: "gov1.jpg"
  },
  {
    name: "National Institute of Disaster Management (NIDM)",
    description:
      "NIDM is an institute focused on training, research, and capacity-building in disaster management. It works under the Ministry of Home Affairs.",
    functions: [
      "Provides training for disaster management professionals.",
      "Conducts research and publishes reports on disaster risks.",
      "Develops strategies for disaster resilience."
    ],
    website: "https://nidm.gov.in",
    image: "gov2.jpg"
  },
  {
    name: "Indian Meteorological Department (IMD)",
    description:
      "IMD is responsible for weather forecasting, early warning systems for cyclones, tsunamis, and other climate-related disasters.",
    functions: [
      "Issues weather alerts and warnings.",
      "Provides climate-related data to various disaster management agencies.",
      "Monitors and predicts cyclones, heatwaves, and heavy rainfall."
    ],
    website: "https://mausam.imd.gov.in",
    image: "gov3.jpg"
  },
  {
    name: "Central Water Commission (CWC)",
    description:
      "CWC monitors and manages water resources, focusing on flood forecasting and water-related disaster management.",
    functions: [
      "Provides real-time flood forecasting.",
      "Monitors river water levels and issues alerts.",
      "Assists in dam management and water conservation."
    ],
    website: "http://cwc.gov.in",
    image: "gov4.jpg"
  },
  {
    name: "Defence Research and Development Organisation (DRDO)",
    description:
      "DRDO develops disaster management technologies, especially for chemical, biological, radiological, and nuclear (CBRN) threats.",
    functions: [
      "Develops protective gear and equipment for disaster response.",
      "Works on early detection and mitigation of nuclear and chemical hazards.",
      "Supports the armed forces in disaster relief operations."
    ],
    website: "https://www.drdo.gov.in",
    image: "gov5.jpg"
  },
  {
    name: "Indian National Centre for Ocean Information Services (INCOIS)",
    description:
      "INCOIS provides ocean-related disaster forecasts, such as tsunami warnings, storm surges, and high wave alerts.",
    functions: [
      "Issues tsunami warnings and alerts to coastal areas.",
      "Monitors ocean conditions for potential disasters.",
      "Supports marine safety and disaster resilience."
    ],
    website: "https://incois.gov.in",
    image: "gov6.jpg"
  },
  {
    name: "National Remote Sensing Centre (NRSC)",
    description:
      "NRSC, a part of ISRO, uses satellite imagery for disaster monitoring and management.",
    functions: [
      "Provides satellite data for flood, drought, and landslide assessments.",
      "Supports rapid damage assessment after disasters.",
      "Works with NDMA and state agencies for disaster preparedness."
    ],
    website: "https://www.nrsc.gov.in",
    image: "gov7.jpg"
  },
  {
    name: "Indian Red Cross Society (IRCS)",
    description:
      "A humanitarian organization that provides emergency relief, medical aid, and disaster response services.",
    functions: [
      "Supplies food, shelter, and medical assistance during disasters.",
      "Conducts disaster preparedness training and awareness programs.",
      "Works in collaboration with government agencies and NGOs."
    ],
    website: "https://indianredcross.org",
    image: "gov8.jpg"
  },
  {
    name: "Coal India Limited – Mine Rescue Services",
    description:
      "Focuses on disaster response in coal mines and underground mining accidents.",
    functions: [
      "Conducts search and rescue operations in mining disasters.",
      "Provides training for mine safety and disaster preparedness.",
      "Develops technologies for mine disaster mitigation."
    ],
    website: "https://www.coalindia.in",
    image: "gov9.jpg"
  }
];

const Governance = () => {
  return (
    <div className="governance-container">
       <div>
    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
  <button style={{ padding: '10px', backgroundColor: '#fff', color: '#00796b', border: 'none', borderRadius: '5px' }}>Back to Home</button>
</Link>
    </div>
      <h2>Disaster Management Organizations</h2>
      <div className="card-grid">
        {organizations.map((org, index) => (
          <div className="card" key={index}>
            <img src={process.env.PUBLIC_URL + "/" + org.image} alt={org.name} className="card-one-image" />
            <div className="card-details">
              <h3 className="card-name">{org.name}</h3>
              <p className="card-desc">{org.description}</p>
              <ul>
                {org.functions.map((func, i) => (
                  <li key={i}>{func}</li>
                ))}
              </ul>
              <h4>Website:</h4>
              <a href={org.website} target="_blank" rel="noopener noreferrer">{org.website}</a>
              <a href="#" className="card-one-button">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Governance;
