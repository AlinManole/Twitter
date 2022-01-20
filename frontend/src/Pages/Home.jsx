import React from 'react';
import styled from "styled-components"


import TwitterBird from "../img/twitter.jpg";
import House from "../img/house.png";
import Hashtag from "../img/hashtag.png";
import Notifications from "../img/notifications.png";
import Messages from "../img/messages.png";
import Signet from "../img/signet.png";
import List from "../img/list.png";
import User from "../img/user.png";
import { Link } from 'react-router-dom';

import { useForm } from "react-hook-form"

import Button from "../components/button"

const HomePage = styled.div`
display: flex;
flex-direction: row;
background: black;
`

const Border = styled.div`
border : 1px solid darkgray;
`

const Log = styled.div`
display: flex;
flex-direction : column;
margin-top: 50%;
`

const SignUp = styled.div`
margin-top: 30px;
`

const Home = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <HomePage>
                <div className="col-5">
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
                <Border>
                    <Log>
                        <h2 className="text-white">Accueil </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="col">
                            <input defaultValue="test" {...register("example")} />
                            <input {...register("exampleRequired", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input type="submit" />
                        </form>
                    </Log>
                    <SignUp>
                        <h3 className="text-white">Rejoignez Twitter Maintenant</h3>
                        <button className="btn btn-primary btn-mall"><Link to="/inscription" />S'inscrire</button>
                    </SignUp>
                </Border>
            </HomePage>
        </>
    );
};

export default Home;