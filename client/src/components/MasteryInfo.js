import React from 'react';

const MasteryInfo = (props) => {
   
  return (
    <section id="two">
        <div className="container">
        <h3>Highest Mastery Champions</h3>
        <br />
            {props.masteries.top3? (
                <div className="row">
                    {props.masteries.top3.map((masteries)=> (
                        <div className="top3champions col-4">
                            <div className="champion-mastery">
                                <img className="mastery-image" src={"http://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/"+masteries.championName+".png"} alt="" />
                                <div className="mastery-image-layers">
                                    <img className="mastery-level" src={"/images/mastery-frame-"+masteries.championLevel+".png"} alt="" />
                                    {masteries.chestGranted? (<img className="chest-found" src="/images/border-chest.png" alt="" />): ""}
                                </div>
                            </div>
                            <br /><br />
                            <p>{masteries.championPoints}</p>
                        </div>
                    ))}
                      <ul className="actions special">
                          <li className="align-center"><input type="button" className="primary" value={props.more?"View Less Masteries":"View More Masteries"} onClick={props.moreMasteries} /></li>
                        </ul>
                </div>
            ):""}
        </div>
    </section>
  );
};

export default MasteryInfo;