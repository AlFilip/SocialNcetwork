import './App.css';
import './icons/css/uicons-regular-rounded.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";


export default function App(props) {
    return (
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route exact path={'/dialogs'}
                       render={() => <Dialogs messagesPage={props.state.messagesPage}/>}/>
                <Route path={'/profile'} render={() => <Profile profilePage={props.state.profilePage}/>}/>
                <Route path={'/music'} render={Music}/>
                <Route path={'/news'} render={News}/>
                <Route path={'/settings'} render={Settings}/>
                {News}
            </div>
            <Footer/>
        </BrowserRouter>
    )
}