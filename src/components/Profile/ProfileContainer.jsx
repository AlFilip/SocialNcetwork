import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, getProfile, getStatus, setStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import RedirectWrapper from "../HOC/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = +this.props.match.params.userId;
        if (!userId && this.props.userAuthData.id) userId = this.props.userAuthData.id;
        if (!userId) userId = 17935;
        this.props.getStatus(userId)
        this.props.getProfile(userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            let userId;
            this.props.match.params.userId ? userId = this.props.match.params.userId : userId = this.props.userAuthData.id
            this.props.getStatus(userId);
            this.props.getProfile(userId);

        }
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPost: state.profilePage.newPost,
        profile: state.profilePage.profile,
        userAuthData: state.userAuthData,
        status: state.profilePage.status
    }
}

export default compose(
    withRouter,
    RedirectWrapper,
    connect(mapStateToProps, {addPost, getProfile, getStatus, setStatus})
)(ProfileContainer);
