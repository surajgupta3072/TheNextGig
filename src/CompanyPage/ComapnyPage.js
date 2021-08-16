import { useParams } from "react-router-dom";
import docClient from "./../GigsPage/GigsAWS";
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

  return (
    <div>
      {gigs.length != 0 && (
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
                    <img className="img_experttop" src="/loger1.svg"/>
                  </div>
                  <div class="para">
                    <h3>{gigs[0].CompanyName}</h3>
                    <p className="subtitle_expertcard">{gigs[0].CompanyIndustry}</p>
                  </div>
                  <div class="logo_para">
                    <a href={gigs[0].CompanyLinkedIn} target="_blank">
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
              <div className="box2_page1">
                <nav className="nav_switchbtn">
                  <button
                    onClick={() => setActive("Gigs")}
                    className="expert_switchbtn"
                  >
                    Gigs
                  </button>
                  <button
                    onClick={() => setActive("MasterSessions")}
                    className="expert_switchbtn"
                  >
                    MasterSessions
                  </button>
                </nav>
                <div>
                  {active === "Gigs" && <Gigs gigData={relatedgigs}/>}
                  {active === "MasterSessions" && <MasterSessions masterData={relatedsessions}/>}
                </div>
              </div>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyPage;
