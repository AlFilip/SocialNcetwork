import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFollowAC,} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {
    getUsers = (pageNumber = 1) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    changePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.getUsers(pageNumber);
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        return <Users usersList={this.props.usersList} toggleFollow={this.props.toggleFollow}
                      setUsers={this.props.setUsers} totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize} currentPage={this.props.currentPage} changePage={this.changePage}/>
    }
}

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
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);