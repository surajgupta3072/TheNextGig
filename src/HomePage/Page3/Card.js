import "./Card.css";

export default function CardX(props) {
  return (
    <div 
      onClick={() => {if(props.time!=="...Coming Soon") window.location.href = "/TNGoriginals/" + props.carl}} className="container_card">
      <div className="cardpage3">
        <div className="card-header">
          <div className="card-title-group"></div>
        </div>
        <img className="card-image" src={props.card} alt="Logo"/>
        <div style={{display:"flex"}} className="card-like-bar">
          <div className="texting">
            <pre style={{fontFamily:"Inter",fontWeight:"bolder"}}>{props.text2}</pre>
          </div>
        </div>
        <div className="like-text1">{props.name}</div>
        <div className="like-text1" style={{display:"flex"}}>
        <div>{props.text1}</div>
        </div>
        <div className="like-text1" style={{display:"flex"}}>
        <div>{props.text3}</div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",color:"white",marginLeft:"10px",marginTop:"20px"}}>
        <div style={{fontSize:"18px"}}>{props.time}</div>
        <div style={{marginRight:"10px", fontSize:"18px"}}>{(props.time!=="...Coming Soon")? ("₹") : ("")}  {props.fees} {(props.time!=="...Coming Soon")? (<text style={{color:"#f26c4f"}}>*</text>) : ("")}</div>
        </div>
        <br/>
      </div>
    </div>
  );
}
