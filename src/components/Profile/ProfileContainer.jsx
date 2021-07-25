import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, getProfile, getStatus, setStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import RedirectWrapper from "../HOC/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.getUserId();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.getUserId();
        }
    }

    getUserId() {
        let userId = +this.props.match.params.userId ? +this.props.match.params.userId : this.props.userAuthData.id;
        this.props.getStatus(userId)
        this.props.getProfile(userId);
    }

    render() {
        if (!this.props.userAuthData.isAuth) return <Redirect to={"/profile"} />
        return (
            <Profile {...this.props}/>
        );
    }
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
    connect(mapStateToProps, {addPost, getProfile, getStatus, setStatus})
)(ProfileContainer);
