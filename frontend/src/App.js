import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Explorer from "./Pages/Explorer"
import Home from "./Pages/Home"
import Tweet from "./Pages/Tweet"
import UserProfile from './Pages/UserProfil'
import UserHome from './Pages/UserHome'
import NotFound from './Pages/NotFound';
import Notification from "./Pages/Notifications"
import Message from "./Pages/Messages"

import 'bootstrap/dist/css/bootstrap.css';

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/:id" element={<UserProfile />} />
        <Route path="/:id/notifications" element={<Notification />} />
        <Route path="/:id/messages" element={<Message />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/tweet/:id" element={<Tweet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;