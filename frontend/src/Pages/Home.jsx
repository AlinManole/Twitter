import React from 'react';

import TwitterBird from "../img/twitter.jpg";
import House from "../img/house.png";
import Hashtag from "../img/hashtag.png";
import Notifications from "../img/notifications.png";
import Messages from "../img/messages.png";
import Signet from "../img/signet.png";
import List from "../img/list.png";
import User from "../img/user.png";
import { Link } from 'react-router-dom';

import Button from "../components/button"

const Home = () => {
    return (
        <>
            <div className="row mh-100 bg-black">
                <div className="col">
                    <Link to="/" ><img src={TwitterBird} className="img-fluid col-4" alt="Oiseau de twitter" style={{ height: "60px", width: "70px" }} /></Link>
                    <div className="d-flex align-items-end">
                        <div className="col-4">
                            <div className="d-flex align-items-end">
                                <img src={House} className="img-fluid mt-5" alt="Logo de maison" style={{ height: "60px", width: "70px" }} />
                                <h2 className="fs-4"><Link to="/" className="text-decoration-none text-white" >Accueil</Link></h2>
                            </div>
                            <div className="d-flex align-items-end">
                                <img src={Hashtag} className="img-fluid mt-2" alt="Logo Hashtag" style={{ height: "60px", width: "70px" }} />
                                <h2 className="fs-4"><Link to="/explorer" className="text-decoration-none text-white" >Explorer</Link></h2>
                            </div>
                            <div className="d-flex align-items-end">
                                <img src={Notifications} className="img-fluid mt-2" alt="Logo Notifs" style={{ height: "60px", width: "70px" }} />
                                <h2 className="fs-4"> <Link to="/:id/notifications" className="text-decoration-none text-white" >Notifications</Link></h2>
                            </div>
                            <div className="d-flex align-items-end">
                                <img src={Messages} className="img-fluid mt-2" alt="Logo Messages" style={{ height: "60px", width: "70px" }} />
                                <h2 className="fs-4"><Link to="/messages" className="text-decoration-none text-white" >Messages</Link></h2>
                            </div>
                            <div className="d-flex align-items-end">
                                <img src={Signet} className="img-fluid mt-2" alt="Logo Signets" style={{ height: "60px", width: "70px" }} />
                                <h2 className="fs-4 text-white">Signets</h2>
                            </div>
                            <div className="d-flex align-items-end">
                                <img src={List} className="img-fluid mt-2" alt="Logo Signets" style={{ height: "60px", width: "70px" }} />
                                <h2 className="fs-4"><Link to="/" className="text-decoration-none text-white" >Liste</Link></h2>
                            </div>
                            <div className="d-flex align-items-end">
                                <img src={User} className="img-fluid mt-2" alt="Logo Signets" style={{ height: "60px", width: "70px" }} />
                                <h2 className="fs-4"><Link to="/UserProfil" className="text-decoration-none text-white" >Profile</Link></h2>
                            </div>
                        </div>
                    </div>
                    <Button className="mt-4" />
                </div>
                <div className="w-50 col mt-5 pt-5 border border-secondary border-1 justify-content-center d-flex">
                    <h2 className="text-white">Accueil </h2>
                </div>
            </div>
        </>
    );
};

export default Home;