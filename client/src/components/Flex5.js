import React from 'react';

const Flex5 = (props) => {
  return (
      <div className="col-4">
        <span className="image fit">
            <img src={"/images/"+props.summoner.flex5.tier+"_Emblem.png"} alt="" style={{display: "block", width: "90%", "margin-right": "auto", "margin-left": "auto"}} />
            <p>Flex 5v5 : {props.summoner.flex5.tier}-{props.summoner.flex5.rank}</p>
            <p>LP: {props.summoner.flex5.leaguePoints}</p>
            <p>Win Ratio: {props.summoner.flex5.wr}</p>
        </span>
        </div> 
  );
};

export default Flex5;