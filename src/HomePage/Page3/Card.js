import "./Card.css";

export default function CardX(props) {
  return (
    <div className="container_card">
      <div className="cardpage3">
        <div className="card-header">
          <div className="card-title-group"></div>
        </div>
        <img className="card-image" src={props.card} alt="Logo"/>
        <div style={{display:"flex"}} className="card-like-bar">
          <div  className="texting">
            {props.text2}
          </div>
        </div>
        
        <div className="like-text" style={{display:"flex"}}>
        <div >{props.name}</div>
        </div>
        <div className="like-text1" style={{display:"flex"}}>
        <div>{props.text1}</div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",color:"white",marginLeft:"10px",marginTop:"20px"}}>
        <div >{props.time}</div>
        <div style={{marginRight:"10px"}}>INR {props.fees}</div>
        </div>
      </div>
    </div>
  );
}
