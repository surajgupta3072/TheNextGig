import Container from 'react-bootstrap/Container';
import './AboutUs.css';

function ContactUs(){
    return(
      <div> 
            <div style={{marginTop:"3%"}} className="heading_box">
            <div>
                <p class="btn">
                    <span>
                        <span>
                            <span className="border_box">CONTACT US</span>
                        </span>
                    </span>
                </p>
            </div>
            <div style={{ marginTop: "70px" }}>
                <h4 className="nolearner_subtitle">You can meet us at</h4>
            </div>
            </div>
             <div style={{marginTop:"7%",marginLeft:"5%"}}> 
            <Container style={{width:"90%",height:"20%"}}>
               
               <p className="AboutUs-p" style={{display: "flex", justifyContent: "center",fontStyle:"italic"}}>Next Gig Private Limited<br />Room no 3, 1st floor<br/>
                    148, Shaheen Chambers<br/>
                    Fort<br/>
                    Mumbai 400001<br/>
                    M: +91 9821903645 / +91 99208 91546<br/>
                    CIN: U72200MH2021PTC355663<br/>
                    GST no: 27AAHCN4501B1ZY
                </p>
            </Container>
            </div>
       </div> 
    );
}

export default ContactUs