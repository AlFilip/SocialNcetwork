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


export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route exact path={'/dialogs'} component={Dialogs}/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
            <Footer />
        </BrowserRouter>
    )
}