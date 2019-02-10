import React from 'react';

const MoreMastery = (props) => {
   
  return (
        <div className="container">
                {props.masteries.all? (
                <div class="row">
                    {props.masteries.all.map((masteries)=> (
                        <div class="top3champions col-4">
                            <div class="champion-mastery">
                                <img class="mastery-image" src={"http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/"+masteries.championName+".png"} alt="" />
                                <div class="mastery-image-layers">
                                    <img class="mastery-level" src={"/images/mastery-frame-"+masteries.championLevel+".png"} alt="" />
                                    <img class="chest-found" src="/images/border-chest.png" alt="" />
                                </div>
                            </div>
                            <br /><br />
                            <p>{masteries.championPoints}</p>
                        </div>
                    ))}
                      <ul class="actions special">
                          <li className="align-center"><input type="button" className="primary" value="View More Masteries" onClick={() => props.moreMasteries} /></li>
                        </ul>
                </div>
            ):""}
        </div>
  );
};

export default MoreMastery;