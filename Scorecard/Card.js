import React from "react";
import './Card.css';

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="name-container">{props.name}</div>
        <div className="score-container">
          <div className="maths">
            <span>Mathematics: </span>
            <span>{props.math}</span>
          </div>
          <div className="english">
            <span>English: </span>
            <span>{props.english}</span>
          </div>
          <div className="science">
            <span>Science: </span>
            <span>{props.science}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
