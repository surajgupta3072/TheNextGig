import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import docClient from '../../GigsPage/GigsAWS';
function HomeVideoPage(props) {
    let { vidId } = useParams();
    const [videos, setvideos] = useState([]);
    useEffect(() => {
        var paramss = {
            TableName: "VideosTable",
            KeyConditionExpression: "#Vid = :VideoID",
            ExpressionAttributeNames: {
                "#Vid": "VideoID",
            },
            ExpressionAttributeValues: {
                ":VideoID": vidId,
            }
        };
        docClient.query(paramss, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                setvideos(data.Items);
            }
        });
    }, []);
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "0px" }}>
            {videos.map((vid, index) =>
                <div style={{ height: "80vh" }}><video controls key={index} style={{ height: "100%", width: "70vw", }} src={vid.VideoLink}>
                </video>
                    <p>{vid.VideoTopic}</p>
                </div>)
            }
        </div>
    );
}
export default HomeVideoPage;