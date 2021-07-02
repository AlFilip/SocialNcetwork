import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {addPost, onPostChange, setProfile} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {
    getProfile(id = 2) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => {
                this.props.setProfile(response.data);
            });
    }

    componentDidMount() {
        this.getProfile();
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
    }
}

export default connect(mapStateToProps, {onPostChange, addPost, setProfile})(ProfileContainer)