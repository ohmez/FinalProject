import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import RankedInfo from "../../components/RankedInfo";
import MasteryInfo from "../../components/MasteryInfo";
import MatchInfo from "../../components/MatchInfo";
import Footer from "../../components/Footer";
class ProfilePage extends Component {
    state = {
    };
    
    componentDidMount(){
        this.summonerPop('ohme');
        require("./assets/css/profile-main.css");
        const scripts = ["/assets/js/jquery.scrollex.min.js","/assets/js/jquery.scrolly.min.js","/assets/js/browser.min.js","/assets/js/breakpoints.min.js","/assets/js/util.js","/assets/js/profile-main.js"];
        for( let x=0; x < scripts.length; x++) {
            const script = document.createElement("script");
            script.src = scripts[x];
            script.async = true;
            document.body.appendChild(script);
        }
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
            <div style={{height: "100%"}}>
                {this.state.summoner?(
                <NavBar summoner={this.state.summoner} />
                ):""}
                <div id="wrapper">

                {this.state.summoner?(
                <div id="main">
                    <RankedInfo summoner={this.state.summoner} />
                    <MasteryInfo masteries={this.state.summoner.masteries} />
                    <MatchInfo name={this.state.summoner.name} revisionDate={this.state.summoner.revisionDate} updated={this.state.summoner.updated} matches={this.state.summoner.matches} />
                    <Footer />
                </div>
                    ):""}
                </div>
            </div>
        );
    };
};

export default ProfilePage;
