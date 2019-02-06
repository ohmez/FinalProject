import React, { Component } from "react";
import "./assets/css/home-main.css";



class HomePage extends Component {
   
    render() {
        return (
            <div style={{height: "100%"}}>

            <header id="header">
                <h1>My Rito</h1>
                <p>Welcome Summoner</p>
            </header>

            <form id="signup-form" method="POST" action="/search">
                <input type="text" name="summonerName" id="summonerName" placeholder="Enter Summoner Name" />
                <input type="submit" value="Find My Rito"/>
            </form>

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
