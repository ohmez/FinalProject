import React from "react";
import {Container} from "reactstrap";
import NavBar from "./NavBar";
import Jumbo from "./Jumbo";
import SearchBar from "./SearchBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



export default class MainContainer extends React.Component {
    state = {
        summoner: {}
    };
    hPChange = newPage => this.setState({page: newPage});
    render() {
        return (
                        <section id="three">
                            <br>
                            <div className="container">
                                {{#if this.matches.first5}}
                                {{>matches/first5}}
                                {{/if}}
                            </div>
                        </section>
        
                <section id="footer">
                    <div className="container">
                        <ul className="copyright">
                            <li>&copy; My Rito isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games
                                or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are
                                trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</li>
                            <br>
                            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                        </ul>
                    </div>
                </section>
        
        
        
        
            <script src="/assets/js/jquery.min.js"></script>
            <script src="/assets/js/jquery.scrollex.min.js"></script>
            <script src="/assets/js/jquery.scrolly.min.js"></script>
            <script src="/assets/js/browser.min.js"></script>
            <script src="/assets/js/breakpoints.min.js"></script>
            <script src="/assets/js/util.js"></script>
            <script src="/assets/js/profile-main.js"></script>
        );
    };
};