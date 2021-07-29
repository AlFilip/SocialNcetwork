import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, clearProfile, getProfile, setus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.showCurrentProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.showCurrentProfile();
        }
    }
    componentWillUnmount() {
        this.props.clearProfile();
    }

    showCurrentProfile() {
        let userId = +this.props.match.params.userId ? +this.props.match.params.userId : this.props.userAuthData.id;
        this.props.getProfile(userId);
    }

    render() {
        if (!this.props.userAuthData.isAuth && !this.props.match.params.userId) return <Redirect to={"/login"} />
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
    connect(mapStateToProps, {addPost, getProfile, setStatus, clearProfile})
)(ProfileContainer);
