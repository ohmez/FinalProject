import React from 'react';

function NavBar (props) {
    let sum = props.summoner
    return (
        <section id="header">
        <header>
            <span className="image avatar"><img src={"http://ddragon.leagueoflegends.com/cdn/9.3.1/img/profileicon/"+sum.profileIconId+".png"} alt="" /></span>
            <h1 id="logo">{sum.name}</h1>
            <p>Level: {sum.summonerLevel}</p>
        </header>
        <nav id="nav">
            <ul>
                <li><a href="#one" className="active">Summoner Details</a></li>
                <li><a href="#two">Highest Mastery Champions</a></li>
                <li><a href="#three">Recent Matches</a></li>
                <li><a href="/">Summoner Search</a></li>
            </ul>
        </nav>
        <footer>
            <ul className="icons">
                <li><a href="https://github.com/ohmez/projectrito" className="icon fa-github"><span className="label">Github</span></a></li>
                <li><a href="mailto:kkid_92@hotmail.com" className="icon fa-envelope"><span className="label">Email</span></a></li>
            </ul>
        </footer>
    </section>
    );
}
export default NavBar;