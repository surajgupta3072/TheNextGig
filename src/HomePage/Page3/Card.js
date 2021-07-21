import React from "react";
import "./Card.css";
export default function CardX(props) {
  return (
    <div>
      <div className="cardpage3">
        <div className="card-header">
          <div className="card-title-group"></div>
        </div>
        <img className="card-image" src={props.card} alt="Logo" />
        <div className="card-like-bar">
          <div className="like-text">
            <img className="company_image" src={props.logo} alt="cr"/>
            {props.text1}
          </div>
        </div>
        <h2 className="texting">{props.text2}</h2>
        <br />
        <br />
        <hr className="line" />
        <div className="boxing">
          <span className="join">Join</span>
          <span className="soon">Soon</span>
        </div>
      </div>
    </div>
  );
}
