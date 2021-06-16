import {addPostCreator, onPostChangeCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newPost: state.profilePage.newPost,
        postData: state.profilePage.postData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange:(text) => {
            dispatch(onPostChangeCreator(text));
        },
        addPost: () => {
            dispatch(addPostCreator());
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostContainer;