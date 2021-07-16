import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import ReduxThunk from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    userAuthData: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(ReduxThunk));

window.store = store;

export default store;

