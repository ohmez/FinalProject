import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import RankedInfo from "../../components/RankedInfo";
import MasteryInfo from "../../components/MasteryInfo";
import "./assets/css/profile-main.css";

class ProfilePage extends Component {
    state = {
    };

    componentDidMount(){
        this.summonerPop('ohme');
    };

    summonerPop = (name) => {
        API.getSummoner(name)
        .then(res => {
            let sum = JSON.parse(res.data.json);
            console.log(sum);
            this.setState({summoner: sum})
        })
    };

    render() {
        return (
            <div style={{height: "100%"}}>
                {this.state.summoner?(
                <NavBar summoner={this.state.summoner} />
                ):""}
                <div id="wrapper">

                {this.state.summoner?(
                <div id="main">
                    <RankedInfo summoner={this.state.summoner} />
                    <MasteryInfo masteries={this.state.summoner.masteries} />
                </div>
                    ):""}
                </div>
            </div>
        );
    };
};

export default ProfilePage;
