import React from 'react';

import TwitterBird from "../img/twitter.jpg";
import House from "../img/house.png";
import Hashtag from "../img/hashtag.png";

const icons = () => {
    return (
        <div className="col">
            <div>
                <img src={TwitterBird} />
                <div className="col">
                    <img src={House} className="imgLogos"/>
                    <img src={Hashtag} className="imgLogos"/>
                </div>
            </div>
        </div>
    );
};

export default icons;