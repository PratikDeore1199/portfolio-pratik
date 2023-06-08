import { Link } from "react-router-dom";
import "./WorkCardStyles.css";
import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project-img"></img>
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">

          <Link className="btn" to={"https://github.com/PratikDeore1199/"}>
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
