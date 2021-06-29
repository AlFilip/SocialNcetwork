import {} from "./Users.module.css"
import {setCurrentPageAC, setUsersAC, toggleFollowAC,} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";


const mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (curentPage) => {
            dispatch(setCurrentPageAC(curentPage))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;