import './Page6.css';
import {BsSlash} from 'react-icons/bs';

function Page6() {
    return (
    <div className="page6_maindiv">
        <div className="image_page6">
            <div className="numbers_page6">
                <h1 className="client_number"><span className="number1"></span><BsSlash className="liner_page6 liner_1"/><h5 style={{fontSize:"1.1rem",color:"white",marginLeft:"32px"}}>learners</h5></h1>
                <h1 className="projects_number"><span className="number2"></span><BsSlash className="liner_page6 liner_2"/><h5 style={{fontSize:"1.1rem",color:"white", textAlign: "center", marginLeft: "-55%"}}>months of <br /> experiential <br /> learning</h5></h1>
               <h1 className="awards_number" ><span className="number3"></span><BsSlash className="liner_page6 liner_3"/><h5 style={{fontSize:"1.1rem",color:"white",textAlign: "center", marginLeft: "-55%"}}> minutes of <br /> learning <br /> content</h5></h1>
               <h1 className="experience_number"><span className="number4"></span><h5 style={{fontSize:"1.1rem",color:"white",marginTop:"4px", textAlign: "center", marginLeft: "-65%"}}>Partner <br /> Organisations</h5></h1>
            </div>
            <div className="numbers_page6_mobile">
                <h1 className="client_number"><span>3200</span><div className="slasher"><BsSlash className="liner_page6 liner_1"/></div><h5 style={{fontSize:"1rem",color:"white"}}>learners</h5></h1>
                <h1 className="projects_number"><span >172</span><div className="slasher"><BsSlash className="liner_page6 liner_2"/></div><h5 style={{fontSize:"1rem",color:"white"}}>months of experiential learning</h5></h1>
               <h1 className="awards_number" ><span>150</span><div className="slasher"><BsSlash className="liner_page6 liner_3"/></div>
               <h5 style={{fontSize:"1rem",color:"white"}}> minutes of learning content</h5></h1>
               <h1 className="experience_number"><span>30</span><h5 style={{fontSize:"1rem",color:"white"}}>Partner Organisations</h5></h1>
            </div>
            <div className="numbers_page6_tab">
                <div className="first_two">
                <h1 className="client_number"><span className="number1"></span><BsSlash className="liner_page6 liner_1"/><h5 style={{fontSize:"1rem",color:"white"}}>learners</h5></h1>
                <h1 className="projects_number"><span className="number2"></span><BsSlash className="liner_page6 liner_2"/><h5 style={{fontSize:"1rem",color:"white"}}>months of experiential learning</h5></h1>
                </div>
              <div className="last_two"> <h1 className="awards_number" ><span className="number3"></span><BsSlash className="liner_page6 liner_3"/><h5 style={{fontSize:"1rem",color:"white"}}> minutes of learning content</h5></h1>
               <h1 className="experience_number"><span className="number4"></span><h5 style={{fontSize:"1rem",marginLeft:"-35px",color:"white"}}>Partner Organisations</h5></h1>
               </div>
            </div>
        </div>
    </div>
    );
  }
  
export default Page6;