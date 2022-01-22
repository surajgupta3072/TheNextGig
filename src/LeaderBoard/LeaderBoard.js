import React from 'react';
import "./LeaderBoard.css";
import docClient from '../GigsPage/GigsAWS';
import { useState, useEffect } from 'react';
function LeaderBoard() {
    const [winner, setwinners] = useState([]);
    useEffect(() => {
        docClient.scan({ TableName: "LeadersTable" }, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                var datasort = data.Items.sort((a, b) => (a.LeaderRank > b.LeaderRank) ? 1 : -1)
                setwinners(datasort);
            }
        });
    }, [])
    return <div className='leader_board'>
        <div className='leaderboard_header'><img className='image_trophy' src="https://socialvideoslearn.s3.ap-south-1.amazonaws.com/istockphoto-1190771780-612x612-removebg-preview.png" />TNG LEADERBOARD</div>
        <div className='leader_profile_container'>
            {winner.map((ele, index) => {
                const c = index + 1;
                return < div className='leader_winner' ><div id={"rank" + c} className='rank_leader_board'>{index + 1}st</div><div className='winner_profile'><div>{ele.LeaderName}</div><div className='reward_points'>{ele.RewardPoints}pts.</div></div></div>
            })}
        </div >
    </div >;
}

export default LeaderBoard;
