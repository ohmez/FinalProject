import React, { Component } from "react";
import Login from "../../components/Login";
import Axios from "axios";

class HomePage extends Component {
    state = {};
    componentDidMount () {
        require("./assets/css/home-main.css");
        const script = document.createElement("script");
        script.src = "assets/js/home-main.js";
        script.async = true;
        document.body.appendChild(script);
    };
    handleLogin = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const postData = {name: data.get("name"), email: data.get("email")};
        Axios.post("/api/login", postData)
        .then(loggedUser => {
            if(loggedUser.data) {
                console.log(loggedUser.data);
                this.setState({welcome: "Welcome back summoner", logged: true})
            } 
        })
        .catch(err => this.setState({error: "login incorrect try again"}));
    };
    
    render() {
        return (
            <div style={{height: "100%"}}>
            <header id="header">
                <h1>My Rito</h1>
                <p>Welcome Summoner</p>
                <p>{this.state.welcome}</p>
                {this.state.error? (<p>{this.state.error}</p>):""}
            </header>

            <form id="signup-form" method="POST" action="api/summoner">
                <input type="text" name="summonerName" id="summonerName" placeholder="Enter Summoner Name" />
                <input type="submit" value="Find My Rito"/>
            </form>
            {this.state.logged?"": (
                <Login handleLogin={this.handleLogin} /> 
            )}
            

            <footer id="footer">
                <ul className="icons">
                    <li><a href="https://github.com/ohmez/projectrito" className="icon fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="mailto:kkid_92@hotmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; My Rito isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games
                        or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are
                        trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</li>
                </ul>
            </footer>
        </div>
            
        );
    }
}

export default HomePage;
