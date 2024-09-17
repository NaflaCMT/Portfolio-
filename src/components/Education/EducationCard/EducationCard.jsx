import React from "react";
import "./Education.css";

const EducationCard = ({ details }) => {
  return (
    <div className="education-card">
      <h6>{details.title}</h6>
      <div className="duration">{details.year}</div>
      <ul>
        {details.description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
