import React from "react";

import './App.css';
import './icons/css/uicons-regular-rounded.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import LeftFiller from "./components/Fillers/LeftFiller";
import RightFiller from "./components/Fillers/RightFiller";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import ProfileContainerWithUrlRoute from "./components/Profile/ProfileContainer";


export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <LeftFiller/>
            <RightFiller/>
            <div className="app-wrapper-content">
                <Route exact path={'/dialogs'}
                       render={() => <DialogsContainer />} />
                <Route path={'/profile/:userId?'} render={() => <ProfileContainerWithUrlRoute /> }/>
                <Route path={'/music'} render={Music}/>
                <Route path={'/news'} render={News}/>
                <Route path={'/settings'} render={Settings}/>
                <Route path={'/users'} render={() => <UsersContainer /> }/>
            </div>
            <SidebarContainer />
            <Footer/>
        </BrowserRouter>
    )
}