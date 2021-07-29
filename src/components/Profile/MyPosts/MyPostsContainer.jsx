import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profile-reducer";

class MyPostsContainer extends React.Component {
    submit = values => {
        this.props.addPost(values.newPost);
    }

    render() {
        return <MyPosts {...this.props} submit={this.submit}/>
    }
}

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData
    }
}

export default connect(mapStateToProps, {addPost})(MyPostsContainer);
