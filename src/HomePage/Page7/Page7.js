import Person from './Person.json';
import '../../App.css'
import './Page7.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos className="arrower1" style={{ paddingLeft:"9.3px",border:"2px solid #f26c4f", borderRadius:"50%",fontSize: "35px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos className="arrower1" style={{ paddingLeft:"7px",paddingRight:"4px",border:"2px solid #f26c4f",borderRadius:"50%", fontSize: "35px" }} />
    </div>
  );
};

function Card(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
      }}
    > <h5 className="quoter" style={{paddingBottom:"20px"}}>{props.quote}</h5>
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={props.img}
        style={{
          width: 120,
          height: 120,
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p style={{ marginTop: 25 }}>
        <div style={{ fontWeight: 500, color: "white" }}>{props.name}</div>
       <span style={{color:"#FFFFFF",opacity:"80%"}}>{props.post}</span>
      </p>
    </div>
  );
};
function Page7() {
    return (
    <div style={{marginTop:"5%"}}>
        <div className="heading_box" style={{marginBottom: "10%"}}>
      <div>
        <p class="btn">
          <span>
            <span>
              <span className="border_box">SUCCESS STORIES</span>
            </span>
          </span>
        </p>
      </div>
      <div style={{marginTop: "70px"}}>
        <h4 className="page3_subtitle text3">This is why we do what we do.</h4>
      </div>
      </div>
        {/* The svg below is for orange rectangle */}
        <svg  className="reactangle_page7"  viewBox="0 0 68 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="68" height="51" fill="#F26C4F"/>
</svg>
{/*The svg below is for Quotes */}
<svg className="Quotes_page7" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M11.8475 0.727272H7.55202V4.25568C7.55202 7.09375 6.17134 9.54829 4.56055 11.8494L7.01509 13.8438C10.0833 11.3892 11.8475 7.32386 11.8475 4.17898V0.727272ZM21.6657 0.727272H17.3702V4.25568C17.3702 7.09375 15.9895 9.54829 14.3787 11.8494L16.8333 13.8438C19.9015 11.3892 21.6657 7.32386 21.6657 4.17898V0.727272Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d" x="0.560547" y="0.727051" width="25.1051" height="21.1165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
{/*This Svg below is for Lower orange traingle below rectangle*/}
<svg className="triangle_page7" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4296 28.4794L2.75692 0.932941L34.6779 3.72567L16.4296 28.4794Z" fill="#F26C4F"/>
</svg>

        <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ paddingBottom:"80px",width: "50%", textAlign: "center" }}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
              {Person.map((item)=>(
            <Card img={item.img} name={item.name} post={item.post} quote={item.quotes} />
              ))}
        </Slider>
      </div>
    </div>
    </div>
    );
  }
  
export default Page7;