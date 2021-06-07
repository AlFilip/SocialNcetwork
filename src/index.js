import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import App from "./App";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App profilePage={state.profilePage} messagesPage={state.messagesPage} sidebar={state.sidebar} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

state.subscribe(rerenderEntireTree)

rerenderEntireTree();

export {state};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

