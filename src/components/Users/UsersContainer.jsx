import {} from "./Users.module.css"
import {setUsersAC, toggleFollow,} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";


const mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollow(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;