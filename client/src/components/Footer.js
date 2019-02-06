import React from 'react';

const Footer = (props) => {
  return (
    <section id="footer">
        <div className="container">
            <ul className="copyright">
                <li>&copy; My Rito isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games
                    or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are
                    trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</li>
                <br />
                <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </section>
    
  );
};

export default Footer;