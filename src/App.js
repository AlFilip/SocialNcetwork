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
import Sidebar from "./components/Sidebar/Sidebar";
import LeftFiller from "./components/Fillers/LeftFiller";
import RightFiller from "./components/Fillers/RightFiller";


export default function App(props) {
    return (
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <LeftFiller/>
            <RightFiller/>
            <div className="app-wrapper-content">
                <Route exact path={'/dialogs'}
                       render={() => <Dialogs messagesPage={props.state.messagesPage}
                                              dispatch={props.dispatch}/>}/>
                <Route path={'/profile'} render={() => <Profile store={props.store}/> }/>
                <Route path={'/music'} render={Music}/>
                <Route path={'/news'} render={News}/>
                <Route path={'/settings'} render={Settings}/>
            </div>
            <Sidebar sidebar={props.state.sidebar}/>
            <Footer/>
        </BrowserRouter>
    )
}