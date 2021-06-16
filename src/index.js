import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store-redux";
import App from "./App";
import {Provider} from "react-redux";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store} >
                <App />
            </Provider >
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state);
})

rerenderEntireTree(store.getState());


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

