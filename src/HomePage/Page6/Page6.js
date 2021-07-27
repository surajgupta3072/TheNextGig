import '../../App.css'
import './Page6.css';
import {BsSlash} from 'react-icons/bs';
function Page6() {
    return (
    <div className="page6_maindiv">
        
        <div className="image_page6">
            <div className="numbers_page6">
                <h1 className="client_number"><span className="number1"></span><BsSlash className="liner_page6 liner_1"/><h5 style={{fontSize:"1.1rem",color:"white"}}>Clients</h5></h1>
                <h1 className="projects_number"><span className="number2"></span><BsSlash className="liner_page6 liner_2"/><h5 style={{fontSize:"1.1rem",color:"white"}}>Projects</h5></h1>
               <h1 className="awards_number" ><span className="number3"></span><BsSlash className="liner_page6 liner_3"/><h5 style={{fontSize:"1.1rem",color:"white"}}>Awards</h5></h1>
               <h1 className="experience_number"><span className="number4"></span><h5 style={{fontSize:"1.1rem",marginLeft:"-30px",color:"white"}}>Years Experience</h5></h1>
            </div>
            <div className="numbers_page6_mobile">
                <h1 className="client_number"><span className="number1"></span><BsSlash className="liner_page6 liner_1"/><h5 style={{marginLeft:"-15px",fontSize:"1rem",color:"white"}}>Clients</h5></h1>
                <h1 className="projects_number"><span className="number2"></span><BsSlash className="liner_page6 liner_2"/><h5 style={{marginLeft:"-15px",fontSize:"1rem",color:"white"}}>Projects</h5></h1>
               <h1 className="awards_number" ><span className="number3"></span><BsSlash className="liner_page6 liner_3"/><h5 style={{marginLeft:"-18px",fontSize:"1rem",color:"white"}}>Awards</h5></h1>
               <h1 className="experience_number"><span className="number4"></span><h5 style={{fontSize:"1rem",marginLeft:"-50px",color:"white"}}>Years Experience</h5></h1>
            </div>
            <div className="numbers_page6_tab">
                <div className="first_two">
                <h1 className="client_number"><span className="number1"></span><BsSlash className="liner_page6 liner_1"/><h5 style={{fontSize:"1rem",color:"white"}}>Clients</h5></h1>
                <h1 className="projects_number"><span className="number2"></span><BsSlash className="liner_page6 liner_2"/><h5 style={{fontSize:"1rem",color:"white"}}>Projects</h5></h1>
                </div>
              <div className="last_two"> <h1 className="awards_number" ><span className="number3"></span><BsSlash className="liner_page6 liner_3"/><h5 style={{fontSize:"1rem",color:"white"}}>Awards</h5></h1>
               <h1 className="experience_number"><span className="number4"></span><h5 style={{fontSize:"1rem",marginLeft:"-35px",color:"white"}}>Years Experience</h5></h1>
               </div>
            </div>
        </div>
    </div>
    );
  }
  
export default Page6;