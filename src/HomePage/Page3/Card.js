import "./Card.css";
import MyVerticallyCenteredModal from './Modal.js'
import { ArrowLeft } from "react-bootstrap-icons";
import { useState }  from 'react';
import './Page3.css'

export default function CardX(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div
      onClick={() => { if (props.time !== "...Coming Soon") window.location.href = "/TNGoriginals/" + props.carl }} className="container_card">
      <div id={props.textid + props.carl} className="cardpage3">
        <div className="card-header">
          <div className="card-title-group"></div>
        </div>
        <figure data-content={props.course_domain} className="figure tag">
          <img src={props.card} alt="featured image" className=" card-image" />
        </figure>
        {/* <img className="card-image"  alt="Logo"/> */}
        <div style={{ display: "flex" }} className="card-like-bar">
          <div className="texting">
            <pre style={{ fontFamily: "Inter", fontWeight: "bolder" }}>{props.text2}</pre>
          </div>
        </div>
        <div className="like-text1">{props.name}</div>
        <div className="like-text1" style={{ display: "flex" }}>
          <div>{props.text1}</div>
        </div>
        <div className="like-text1" style={{ display: "flex" }}>
          <div>{props.text3}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "white", marginLeft: "10px", marginTop: "20px" }}>
          <div style={{ fontSize: "18px" }}>{props.time}</div>
          <div style={{ marginRight: "10px", fontSize: "18px" }}>{(props.time !== "...Coming Soon") ? ("") : (
            <div style={{marginRight: "20px",display:"flex",justifyContent:"center"}}> <button style={{marginTop:"0px"}} className="button_slide_tngorig slide_right" onClick={() => setModalShow(true)}>
            Keep me <br/> posted <ArrowLeft className="button_arrow_tngorig"/></button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              TNGoriginalInput = {props.text2}
            /></div>
          )}  {props.fees} {(props.time !== "...Coming Soon") ? (<text style={{ color: "#f26c4f" }}></text>) : ("")}</div>
        </div>
        <br />
      </div>
    </div >
  );
}
