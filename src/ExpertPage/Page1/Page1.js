import React, { useState } from 'react';
import expertData from './../Experts.json';
import Container from 'react-bootstrap/Container';
import masterData from './../../MasterClassPage/Masterclass.json';
import './Page1.css'
import {Linkedin } from 'react-bootstrap-icons';
import MasterSessions from './../MasterSessions';
import P2PLearning from './../P2PLearning';


function Page1(props) {
  const [active, setActive] =  useState("MasterSessions");
  const expert = expertData[props.Eid-1];
  return (
    <div>
        {/* {expert.ExpertName}
        <br/>
        {masterData[expert.ExpertMasterClass[0]-1].course_name}
        {masterData[expert.ExpertMasterClass[1]-1].course_name} */}
          <div className="header_masterclass">
            <Container>
              <div className="top_masterclass">
                <h1>LET’S KNOW THE EXPERT</h1>
                <p className="subtitle_masterclass">
                Take a <span className="orange_text_masterclass"> sneak peak </span> into the career of the professional teaching you{" "}
                </p>
              </div>
            </Container>
        </div>
        <Container>
        <div className="pack">
          <div className="testimonial">
            <div className="imag">
              <img className="img_experttop" src={expert.ExpertPic} />
            </div>
            <div class="para">
              <h3>{expert.ExpertName}</h3>
              <p className="subtitle_expertcard">{expert.ExpertDesignation}</p>       
            </div>
            <div class="logo_para">
              <a href={expert.ExpertLinkedIn} target="_blank"><Linkedin  style={{color: "white", cursor: "pointer"}} size={34}/></a>
            </div>
            <div>
              <p className="subtitle2_expertcard">{expert.ExpertDescription}</p>
            </div>
            <div className="img_arr">
              {expert.ExpertCompaniesLogo.map(companyLogo=>
                <img className="img_company" src={companyLogo}/>
              )}
            </div>
          </div>
        </div>
        </Container>
        <div className="header_masterclass">
            <Container>
              <div className="top_masterclass">
                <h1>MORE FROM THE EXPERT</h1>
                <p className="subtitle_masterclass">
                What else can you learn from the <span className="orange_text_masterclass">Expert </span> {" "}
                </p>
              </div>
            </Container>
        </div>
        <Container>
          <div className="testimonial">
            <nav className="nav_switchbtn">
              <button onClick={() => setActive("MasterSessions")} className="expert_switchbtn">MasterSessions</button>
              <button onClick={() => setActive("P2PLearning")} className="expert_switchbtn">P2P Learning</button>
            </nav>
            <div>
              {active === "MasterSessions" && <MasterSessions Eid={props.Eid}/>}
              {active === "P2PLearning" && <P2PLearning />}
            </div>
          </div>
        </Container>
    </div>
  );
}

export default Page1;
