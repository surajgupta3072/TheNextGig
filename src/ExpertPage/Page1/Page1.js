import expertData from './../Experts.json';
import Container from 'react-bootstrap/Container';
import './Page1.css'
import { Linkedin } from 'react-bootstrap-icons';
// import MasterSessions from './../MasterSessions';

function Page1(props) {
  var filteredArray = expertData.filter(function(ob){
    if(ob.ExpertId===Number(props.Eid))
      return ob;
  });
  const expert = filteredArray[0];
  return (
    <div>
      <div className="header_masterclass">
        <Container>
          <div className="top_masterclass">
            <h1>HERE ARE THE EXPERTS</h1>
            <p className="subtitle_masterclass">
            and what they’ve done in the past
            </p>
          </div>
        </Container>
        </div>
        <Container>
        <div className="pack">
          <div className="testimonial">
            <div className="imag">
              <img alt="..." className="img_experttop" src={expert.ExpertPic} />
            </div>
            <div class="para">
              <h3>{expert.ExpertName}</h3>
              <p className="subtitle_expertcard">{expert.ExpertDesignation}</p>       
            </div>
            <div class="logo_para">
              <a href={expert.ExpertLinkedIn} target="_blank" rel="noreferrer"><Linkedin  style={{color: "white", cursor: "pointer"}} size={34}/></a>
            </div>
            <div>
              <p className="subtitle2_expertcard">{expert.ExpertDescription}</p>
            </div>
            <div className="img_arr">
              {expert.ExpertCompaniesLogo.map(companyLogo=>
                <img alt="..." className="img_company" src={companyLogo}/>
              )}
            </div>
          </div>
        </div>
        </Container>
        {/* <div className="header_masterclass">
            <Container>
              <div className="top_masterclass">
                <h1>MORE FROM THE EXPERT</h1>
                <p className="subtitle_masterclass">
                What else can you learn from the <span className="orange_text_masterclass">Expert </span> {" "}
                </p>
              </div>
            </Container>
        </div> */}
        {/* <MasterSessions Eid={props.Eid}/> */}
    </div>
  );
}

export default Page1;
