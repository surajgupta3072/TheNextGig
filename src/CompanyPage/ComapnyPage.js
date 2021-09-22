import { useParams } from "react-router-dom";
import docClient from "./../GigsPage/GigsAWS";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import './CompanyPage.css'
import { Linkedin } from 'react-bootstrap-icons';
import MasterSessions from './MasterSessions';
import Gigs from './Gigs';
import expert from './../MasterClassPage/Masterclass.json';

function CompanyPage() {
  let { id } = useParams();
  const [gigs, setGigs] = useState([]);
  const [active, setActive] = useState("Gigs");
  const [relatedgigs, setDataCompanyGigs] = useState([]);
  const [relatedsessions, setDataCompanyMasterSessions] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [color1,setColor1] =useState("#f26c4f");
  const [textColor1,setextColor1] =useState("white");
  const [color2,setColor2] =useState("white");
  const [textColor2,setextColor2] =useState("#f26c4f");
  const [color3,setColor3] =useState("white");
  const [textColor3,setextColor3] =useState("#f26c4f");
  const [rew, setRew] = useState(0);
  const [allvideos, setAllvideos] = useState([]);
  const [user, setUser] = useState("");
  const [redirectlogin, setRedirectLogin] = useState(true);

  async function queryCall(id) {
    let params = {
      TableName: "GigsTable",
      KeyConditionExpression: "#Gid = :GigId",
      ExpressionAttributeNames: {
        "#Gid": "GigId",
      },
      ExpressionAttributeValues: {
        ":GigId": id,
      },
    };
    try {
      const data1 = await docClient.query(params).promise()
      return data1.Items[0]
    } 
    catch (err) {
      return err
    }
  };

  useEffect(() => {
    let params = {
      TableName: "GigsTable",
      KeyConditionExpression: "#Gid = :GigId",
      ExpressionAttributeNames: {
        "#Gid": "GigId",
      },
      ExpressionAttributeValues: {
        ":GigId": id,
      },
    };
    docClient.query(params, async function (err, data) {
      if (err) {
        console.log(err);
      } 
      else {
        setGigs(data.Items)
        let finalGigs = []
        let finalMasters = []
        for (let i = 0; i < data.Items[0].CompanyGigs.length; i++) {
          let singleGig = await queryCall(data.Items[0].CompanyGigs[i]);
          finalGigs.push(singleGig);
        }
        setDataCompanyGigs(finalGigs);
        for (let i = 0; i < data.Items[0].CompanyMasterSessions.length; i++) {
          let singleMaster = expert[data.Items[0].CompanyMasterSessions[i]-1];
          finalMasters.push(singleMaster);
        }
        setDataCompanyMasterSessions(finalMasters);
      }
    });
  }, []);
  function buttonColor(word){
    setActive(word)
    if(word==="Gigs"){
      setColor1("#f26c4f");setextColor1("white");setColor2("white");setextColor2("#f26c4f");setColor3("white");setextColor3("#f26c4f");
    }
    if(word==="MasterSessions"){
     setColor1("white");setextColor1("#f26c4f");setColor2("#f26c4f");setextColor2("white");setColor3("white");setextColor3("#f26c4f");
   }
  }
  return (
    <div>
      {gigs.length!== 0 && (
        <div>
          <div>
            <div className="header_masterclass">
              <Container>
                <div className="top_masterclass">
                  <h1>LET’S KNOW THE COMPANY</h1>
                  <p className="subtitle_masterclass">
                    Take a{" "}
                    <span className="orange_text_masterclass">
                      {" "}
                      sneak peak{" "}
                    </span>{" "}
                    into whom you will be working for{" "}
                  </p>
                </div>
              </Container>
            </div>
            <Container>
              <div className="pack">
                <div className="testimonial">
                  <div className="imag">
                    <img alt="..." className="img_experttop" src={gigs[0].GigImage}/>
                  </div>
                  <br/>
                  <div class="para">
                    <h3>{gigs[0].CompanyName}</h3>
                    <p className="subtitle_expertcard">{gigs[0].CompanyIndustry}</p>
                  </div>
                  <div class="logo_para">
                    <a href={gigs[0].CompanyLinkedIn} rel="noreferrer" target="_blank">
                      <Linkedin
                        style={{ color: "white", cursor: "pointer" }}
                        size={34}
                      />
                    </a>
                  </div>
                  <div>
                    <p className="subtitle2_expertcard">
                    {gigs[0].CompanyDescription}
                    </p>
                  </div>
                </div>
              </div>
            </Container>
            <div className="header_masterclass">
              <Container>
                <div className="top_masterclass">
                  <h1>MORE FROM THE COMPANY</h1>
                  <p className="subtitle_masterclass">
                    How else can you be associated with the{" "}
                    <span className="orange_text_masterclass"> company </span>{" "}
                  </p>
                </div>
              </Container>
            </div>
            <Container>
            <Row style={{marginTop:"5%"}} >
               <Col xs={9} className="SocialLearn_laptop">
                  <button onClick={()=>buttonColor("Gigs")} style={{marginLeft:"2%",marginRight:"5%",backgroundColor:color1,color:textColor1,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Gigs</button>
                  <button onClick={()=>buttonColor("MasterSessions")} style={{backgroundColor:color2,marginRight:"5%",color:textColor2,borderRadius:"40px",width:"fit-content",height:"30px",fontWeight:"bold",border:"0px"}}>MasterSessions</button>
               </Col>
             </Row>
             </Container>
              <div>
                  {active === "Gigs" && <Gigs gigData={relatedgigs}/>}
                  {active === "MasterSessions" && <MasterSessions masterData={relatedsessions}/>}
                </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyPage;
