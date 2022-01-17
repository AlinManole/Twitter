import React from 'react';

import TwitterBird from "../img/twitter.jpg";
import House from "../img/house.png";
import Hashtag from "../img/hashtag.png";
import Notifications from "../img/notifications.png";
import Messages from "../img/messages.png";

const icons = () => {
    return (
        <div className="col">
            <div>
                <img src={TwitterBird} className="img-fluid col-4" alt="Oiseau de twitter" style={{ height: "60px", width: "70px" }} />
                <div className="col-4">
                    <div className="d-flex align-items-end">
                        <img src={House} className="img-fluid mt-5" alt="Logo de maison" style={{ height: "60px", width: "70px" }} />
                        <h2 className="fs-4">Accueil</h2>
                    </div>
                    <div className="d-flex align-items-end">
                        <img src={Hashtag} className="img-fluid mt-2" alt="Logo Hashtag" style={{ height: "60px", width: "70px" }} />
                        <h2 className="fs-4">Explorer</h2>
                    </div>
                    <div className="d-flex align-items-end">
                        <img src={Notifications} className="img-fluid mt-2" alt="Logo Notifs" style={{ height: "60px", width: "70px" }} />
                        <h2 className="fs-4"> Notifications</h2>
                    </div>
                    <div className="d-flex align-items-end">
                        <img src={Messages} className="img-fluid mt-2" alt="Logo Messages" style={{ height: "60px", width: "70px" }} />
                        <h2 className="fs-4">Messages</h2>
                    </div>
                    <div className="d-flex align-items-end">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default icons;