import React from 'react';

const MasteryInfo = (props) => {
   
  return (
    <section id="two">
        <div className="container">
            {props.masteries.top3? (
                <div class="row">
                <h3>Highest Mastery Champions</h3>
                <br />
                    {props.masteries.top3.map((masteries)=> (
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
                </div>
            ):""}
        </div>
    </section>
  );
};

export default MasteryInfo;