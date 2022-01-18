import React from 'react';

import {Link} from "react-router-dom"

const button = () => {
    return (
        <div>
            <button className="bg-black border-0"><Link to="/tweet" className=" btn-block mt-5 text-white text-decoration-none btn btn-primary">Tweeter</Link></button>
        </div>
    );
};

export default button;