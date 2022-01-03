import Container from 'react-bootstrap/Container';
import './Page1.css';
import { Linkedin } from 'react-bootstrap-icons';
import {useState, useEffect} from 'react';
import docClient from '../../GigsPage/GigsAWS';

function Page1(props) {
  console.log(props.Eid)
  const [expert, setExpert] = useState({"ExpertCompaniesLogo": []});
  var paramss = {
    TableName: "ExpertsTable",
    Key: { "ExpertID": props.Eid }
  };
  useEffect(() => {
    docClient.get(paramss, function (err, data) {
      if (err) {
        console.log(err);
      } 
      else {
        console.log(data.Items)
        setExpert(data.Items)
      }
    });
  }, []);

  return (
    <div>
      <div className="header_masterclass">
        <Container>
          <div className="top_masterclass">
            <h1>HERE ARE OUR EXPERTS</h1>
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
              <h3 style={{color:"#f26c4f"}}>{expert.ExpertName}</h3>
              <p className="subtitle_expertcard">{expert.ExpertDesignation}</p>   
              <p className="subtitle_expertcard">{expert.ExpertEducational}</p>       
            </div>
            <div class="logo_para">
              <a href={expert.ExpertLinkedIn} target="_blank" rel="noreferrer"><Linkedin  style={{color: "white", cursor: "pointer"}} size={34}/></a>
            </div>
            <br/>
            <div>
              <h3 style={{color:"#f26c4f"}}>Skills experienced in:</h3>
              <p className="subtitle_expertcard">{expert.ExpertSkills}</p>   
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
