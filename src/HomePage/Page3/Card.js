import React from "react";
import "./Card.css";
export default function CardX(props) {
  return (
    <div className="container_card">
      <div className="cardpage3">
        <div className="card-header">
          <div className="card-title-group"></div>
        </div>
        <span style={{position:"absolute",fontFamily:"Brush Script MT, Brush Script Std, cursive",color:"#f26c4f",fontSize:"35px",transform:"rotate(-50deg)",marginLeft:"10px",marginTop:"-15px"}}>New</span>
        <img className="card-image" src={props.card} alt="Logo"/>
        <div style={{display:"flex",justifyContent:"center"}} className="card-like-bar">
          <div  className="texting">
            {props.text2}
          </div>
        </div>
        <hr style={{color:"#f26c4f",height:"3px"}}/>
        <div className="like-text" style={{display:"flex",justifyContent:"space-between"}}>
        <div >{props.name}</div>
        <div >{props.time}</div>
        </div>
        <div className="like-text1" style={{display:"flex",justifyContent:"space-between"}}>
        <div>{props.text1}</div>
        <div>INR {props.fees}</div>
        </div>
      </div>
    </div>
  );
}
