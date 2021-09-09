import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import docClient from '../GigsPage/GigsAWS';

function Videos() {
  const [allvideos, setAllvideos] = useState([]);

  useEffect(() => {
    var params = {
      TableName: "VideosTable"
    };
    docClient.scan(params, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        setAllvideos(data.Items.filter((e)=>{if(e.isApproved===true) return e}));
      }
    });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {allvideos.map((vid)=>
            <Col xs={4} key={vid.VideoID}>
              <Row>
                <video controls style={{ height: "250px", width: "350px" }}>
                  <source src={vid.VideoLink} />
                </video>
              </Row>
              <Row>
                <Col>{vid.VideoTopic}</Col>
              </Row>
              <Row>
                <Col>{vid.VideoHashtags}</Col>
              </Row>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Videos;
