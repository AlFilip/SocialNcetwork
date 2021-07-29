import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, clearProfile, getProfile, setStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";


const ProfileContainerWithHooks = props => {
    useEffect(() => {
        let userId = props.match.params.userId ? props.match.params.userId : props.userAuthData.id;
        props.getProfile(userId);
        return props.clearProfile();
    }, [props.match.params.userId, props.userAuthData.id]);

    if (!props.userAuthData.isAuth && !props.match.params.userId) return <Redirect to={"/login"}/>
    return <Profile {...props}/>
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userAuthData: state.userAuthData,
        status: state.profilePage.status
    }
}

export default compose(
    withRouter,
    // RedirectWrapper,
    connect(mapStateToProps, {addPost, getProfile, setStatus, clearProfile})
)(ProfileContainerWithHooks);
