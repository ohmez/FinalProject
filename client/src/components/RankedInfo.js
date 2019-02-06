import React from 'react';

const RankedInfo = (props) => {
   
  return (
    <section id="one">
        <div className="image main" data-position="center">
            <img src="/images/banner.jpg" alt="" />
        </div>
    <div className="container">
        <header className="major">
            <h3>Ranked Summoner Details</h3>
        </header>
        <div className="box alt">
        <div className="row gtr-50 gtr-uniform" style={{"text-align": "center"}}>
            {props.summoner.flex5 ? (
                <div className="col-4">
                    <span className="image fit">
                        <img src={"/images/"+props.summoner.flex5.tier+"_Emblem.png"} alt="" style={{display: "block", width: "90%", "margin-right": "auto", "margin-left": "auto"}} />
                        <p>Flex 5v5 : {props.summoner.flex5.tier}-{props.summoner.flex5.rank}</p>
                        <p>LP: {props.summoner.flex5.leaguePoints}</p>
                        <p>Win Ratio: {props.summoner.flex5.wr}</p>
                    </span>
                </div> 
            ):""}
            {props.summoner.solo ? (
                <div className="col-4">
                    <span className="image fit">
                        <img src={"/images/"+props.summoner.solo.tier+"_Emblem.png"} alt={props.summoner.solo.tier} style={{display: "block", width: "90%", "margin-right": "auto", "margin-left": "auto"}}/>
                        <p>Solo / Duo Rank : {props.summoner.solo.tier}-{props.summoner.solo.rank} </p>
                        <p>LP: {props.summoner.solo.leaguePoints}</p> 
                        <p>Win Ratio: {props.summoner.solo.wr}</p>
                    </span>
                </div>
            ):""}
            {props.summoner.flex3 ? (
                <div className="col-4">
                    <span className="image fit">
                        <img src={"/images/"+props.summoner.flex3.tier+"_Emblem.png"} alt="" style={{display: "block", width: "90%", "margin-right": "auto", "margin-left": "auto"}}/>
                        <p>Flex 3v3 : {props.summoner.flex3.tier}-{props.summoner.flex3.rank}</p>
                        <p>LP: {props.summoner.flex3.leaguePoints}</p>
                        <p>Win Ratio: {props.summoner.flex3.wr}</p>
                    </span>
                </div>
            ):""}
        </div>
        </div>
        {props.summoner.errMsg ? (
            <h1 style="text-align:center">{props.summoner.errMsg}</h1>
        ):""}
        <h4 style={{"text-align":"center"}}>Any Win Ratio greater than 1 is a climbing WR.</h4>
        <h4 style={{"text-align":"center"}}>Currently the average Masters Win Ratio is {props.summoner.masters.avg}</h4>
    </div>
    </section>
  );
};

export default RankedInfo;