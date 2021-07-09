import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, getProfile, onPostChange} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = +this.props.match.params.userId;
        !userId && this.props.userAuthData.id ? userId = this.props.userAuthData.id : userId = 17935;
        this.props.getProfile(userId);
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
    }
}

const ProfileContainerWithUrlRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {onPostChange, addPost, getProfile})(ProfileContainerWithUrlRouter);