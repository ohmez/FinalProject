import React from 'react';

const MatchInfo = (props) => {
   
  return (
    <section id="three">
    <br />
    <div className="container">
    <div id="first5Matches">
    <h3>Most Recent Matches</h3>
    <h5>{props.name}'s account was last played on {props.revisionDate}</h5>
    <h5>{props.name}'s QwikStats was last updated on {props.updated}</h5>
        <article>
            {props.matches.first5.map((match) => (
                <div className="table-wrapper">
                    <table>
                        <tbody>
                            <tr>
                                <td style={{"textAlign": "center"}}>
                                    <img src={"http://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/"+match.championName+".png"} alt="" style={{margin:"0 , 0"}}/>
                                    <h3>{match.win? "Victory":"Defeat"}</h3>
                                </td>
                                <td style={{"verticalAlign": "middle"}}>
                                    <h3>{match.championName}</h3>
                                    <h5>Lane : {match.lane}</h5>
                                    <h5>Your KDA : {match.kda}   ||  Kills : {match.kills} / Assists : {match.assists} / Deaths : {match.deaths}</h5>
                                    <h5>Creep Score : {match.cs}   ||  Vision Score : {match.vs}</h5>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            ))}
        </article>
</div>
    </div>
</section>
  );
};

export default MatchInfo;