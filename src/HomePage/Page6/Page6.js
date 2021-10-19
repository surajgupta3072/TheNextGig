import './Page6.css';
import {BsSlash} from 'react-icons/bs';

function Page6() {
    return (
    <div className="page6_maindiv">
        <div className="image_page6">
            <div className="numbers_page6">
                <h1 className="client_number"><span className="number1"></span><BsSlash className="liner_page6 liner_1"/><h5 style={{fontSize:"1.1rem",color:"white",marginLeft:"32px"}}>Learners</h5></h1>
                <h1 className="projects_number"><span className="number2"></span><BsSlash className="liner_page6 liner_2"/><h5 style={{fontSize:"1.1rem",color:"white"}}>Months of <br /> Experiential <br /> Learning</h5></h1>
               <h1 className="awards_number" ><span className="number3"></span><BsSlash className="liner_page6 liner_3"/><h5 style={{fontSize:"1.1rem",color:"white",marginLeft:"-3px"}}> minutes of <br /> Learning <br /> content</h5></h1>
               <h1 className="experience_number"><span className="number4"></span><h5 style={{fontSize:"1.1rem",color:"white",marginTop:"4px"}}>Partner <br /> Organisations</h5></h1>
            </div>
            <div className="numbers_page6_mobile">
                <h1 className="client_number"><span className="number1"></span><div className="slasher"><BsSlash className="liner_page6 liner_1"/></div><h5 style={{fontSize:"1rem",color:"white"}}>Learners</h5></h1>
                <h1 className="projects_number"><span className="number2"></span><div className="slasher"><BsSlash className="liner_page6 liner_2"/></div><h5 style={{fontSize:"1rem",color:"white"}}>Months of Experiential Learning</h5></h1>
               <h1 className="awards_number" ><span className="number3"></span><div className="slasher"><BsSlash className="liner_page6 liner_3"/></div>
               <h5 style={{fontSize:"1rem",color:"white"}}> minutes of Learning content</h5></h1>
               <h1 className="experience_number"><span className="number4"></span><h5 style={{fontSize:"1rem",color:"white"}}>Partner Organisations</h5></h1>
            </div>
            <div className="numbers_page6_tab">
                <div className="first_two">
                <h1 className="client_number"><span className="number1"></span><BsSlash className="liner_page6 liner_1"/><h5 style={{fontSize:"1rem",color:"white"}}>Learners</h5></h1>
                <h1 className="projects_number"><span className="number2"></span><BsSlash className="liner_page6 liner_2"/><h5 style={{fontSize:"1rem",color:"white"}}>Projects</h5></h1>
                </div>
              <div className="last_two"> <h1 className="awards_number" ><span className="number3"></span><BsSlash className="liner_page6 liner_3"/><h5 style={{fontSize:"1rem",color:"white"}}> minutes of Learning content</h5></h1>
               <h1 className="experience_number"><span className="number4"></span><h5 style={{fontSize:"1rem",marginLeft:"-35px",color:"white"}}>Partner Organisations</h5></h1>
               </div>
            </div>
        </div>
    </div>
    );
  }
  
export default Page6;