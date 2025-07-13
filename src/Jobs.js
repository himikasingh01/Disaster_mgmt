import React from "react";
import "./style.css"; // Ensure this contains styles for cards

const jobsData = [
  {
    title: "Disaster Response Coordinator",
    description:
      "Oversees emergency response plans, coordinates relief efforts, and manages disaster relief teams.",
    link: "https://reliefweb.int/",
  },
  {
    title: "Emergency Management Specialist",
    description:
      "Develops strategies to mitigate disasters, assists in response planning, and ensures communities are prepared.",
    link: "https://www.usajobs.gov/",
  },
  {
    title: "Risk Assessment Analyst",
    description:
      "Evaluates hazards, studies historical disaster data, and assesses vulnerabilities to minimize risks.",
    link: "https://unjobs.org/",
  },
  {
    title: "Humanitarian Aid Worker",
    description:
      "Works with NGOs to provide relief, distribute supplies, and assist affected populations.",
    link: "https://www.devnetjobs.org/",
  },
  {
    title: "Environmental Health & Safety Officer",
    description:
      "Ensures disaster sites follow safety regulations, manages hazardous materials, and prevents health risks.",
    link: "https://www.indeed.com/",
  },
  {
    title: "Logistics & Supply Chain Manager",
    description:
      "Plans and manages the distribution of relief materials. Ensures transportation routes remain open during crises.",
    link: "https://www.logisticsjobs.com/",
  },
  {
    title: "Meteorologist / Climate Specialist",
    description:
      "Predicts natural disasters, provides early warning reports, and works with government agencies.",
    link: "https://www.weatherjobs.com/",
  },
  {
    title: "Search & Rescue Specialist",
    description:
      "Conducts rescue missions, assists evacuations, and provides emergency medical care.",
    link: "https://www.rescuejobs.org/",
  },
];

const Jobs = () => {
  return (
    <div className="jobs-container">
      <h2 className="jobs-title">Various Jobs in Disaster Management</h2>
      <p className="jobs-desc">
        Explore job opportunities in disaster management to help communities recover from crises.
      </p>

      <div className="jobs-grid">
        {jobsData.map((job, index) => (
          <div className="job-card" key={index}>
            <h3 className="job-title">{job.title}</h3>
            <p className="job-desc">{job.description}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer" className="job-button">
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;