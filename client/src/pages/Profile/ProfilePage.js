import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import ProfileInfo from "../../components/ProfileInfo";
// import "./assets/css/profile-main.css";

class ProfilePage extends Component {
    state = {
    };
    componentDidMount(){
        this.summonerPop('ohme');
    }
    summonerPop = (name) => {
        API.getSummoner(name)
        .then(res => {
            let sum = JSON.parse(res.data.json);
            console.log(sum);

            this.setState({summoner: sum})
        })
    }

    render() {
        return (
            <div id="wrapper">

            <div id="main">
            {this.state.summoner?(
            <NavBar summoner={this.state.summoner} />,
            <ProfileInfo summoner={this.state.summoner} />
            ):""}
            </div>
            </div>
        );
    }
}

export default ProfilePage;
