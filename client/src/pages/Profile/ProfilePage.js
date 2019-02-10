import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import RankedInfo from "../../components/RankedInfo";
import MasteryInfo from "../../components/MasteryInfo";
import MatchInfo from "../../components/MatchInfo";
import Footer from "../../components/Footer";
import MoreMastery from "../../components/MoreMastery";
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
    
    summonerPop = () => {
        var sumName = this.props.match.params.name;
        API.findSummoner(sumName)
        .then(res => {
            if(res.data) {
                console.log(res.data);
                if(res.data.errMsg) this.setState({error: res.data.errMsg})
                else {
                    this.setState({summoner: res.data});
                }
            } else {
               res.redirect("/");
            }
        })
    };
    
    moreMasteries = event => {
        console.log('more masteries triggered');
        console.log(event.target);
        this.state.moreMastery? this.setState({moreMastery: false}) : this.setState({moreMastery: true});
    };

    render() {
        if(this.state.error) return( <div><h1>{this.state.error}</h1><a href="/">try another name</a></div>)
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
                    {this.state.moreMastery?(
                    <MoreMastery 
                    masteries={this.state.summoner.masteries} 
                    moreMasteries={() =>this.moreMasteries}
                    />):""}
                    <MatchInfo 
                    name={this.state.summoner.name} 
                    revisionDate={this.state.summoner.revisionDate} 
                    updated={this.state.summoner.updated} 
                    matches={this.state.summoner.matches} 
                    />
                    <Footer />
                </div>
                    ):""}
                </div>
            </div>
        );
    };
};

export default ProfilePage;
