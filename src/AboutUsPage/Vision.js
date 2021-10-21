import Container from 'react-bootstrap/Container';
import './AboutUs.css';

function Vision(){
    return(
      <div> 
            <div style={{marginTop:"3%"}} className="heading_box">
            <div>
                <p class="btn">
                    <span>
                        <span>
                            <span className="border_box">THE VISION</span>
                        </span>
                    </span>
                </p>
            </div>
            <div style={{ marginTop: "70px" }}>
                <h4 className="nolearner_subtitle">What drives us and where we’re headed</h4>
            </div>
            </div>
             <div style={{marginTop:"7%",marginLeft:"5%"}}> 
            <Container style={{backgroundColor:"#32181E",width:"90%",height:"20%"}}>
               <p className="AboutUs-p" style={{marginLeft:"1%",marginRight:"2%",marginTop:"2%",marginBottom:"0.001%"}}>Redefining how the world learns, shares knowledge, accesses opportunities and grows...</p>
                <br/>
               <p className="AboutUs-p" style={{marginLeft:"58%",fontStyle:"italic"}}>...all at one place, and together.</p>
            </Container>
            </div> 
       </div> 
    );
}

export default Vision