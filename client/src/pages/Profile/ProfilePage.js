import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import RankedInfo from "../../components/RankedInfo";
import MasteryInfo from "../../components/MasteryInfo";
import MatchInfo from "../../components/MatchInfo";

class ProfilePage extends Component {
    state = {
    };
    
    componentDidMount(){
        this.summonerPop('ohme');
        require("./assets/css/profile-main.css");
    };

    summonerPop = (name) => {
        API.getSummoner(name)
        .then(res => {
            let sum = JSON.parse(res.data.json);
            this.setState({summoner: sum})
        })
    };

    render() {
        return (
            <div className="ProfileArea" style={{height: "100%"}}>
                {this.state.summoner?(
                <NavBar summoner={this.state.summoner} />
                ):""}
                <div id="wrapper">

                {this.state.summoner?(
                <div id="main">
                    <RankedInfo summoner={this.state.summoner} />
                    <MasteryInfo masteries={this.state.summoner.masteries} />
                    <MatchInfo name={this.state.summoner.name} revisionDate={this.state.summoner.revisionDate} updated={this.state.summoner.updated} matches={this.state.summoner.matches} />
                </div>
                    ):""}
                </div>
            </div>
        );
    };
};

export default ProfilePage;
