import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost, onPostChange} from "../../../redux/profile-reducer";


const mapStateToProps = (state) => {
    return {
        newPost: state.profilePage.newPost,
        postData: state.profilePage.postData
    }
}

const MyPostContainer = connect(mapStateToProps, {onPostChange, addPost})(MyPosts);

export default MyPostContainer;