import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Loader from "../../assets/loader/Loader";
import {setCurrentPage, setTotalUsersCount, setUsers, toggleFollow, toggleIsFetching} from "../../redux/users-reducer";


class UsersContainer extends React.Component {
    getUsers = (pageNumber = 1) => {
        this.props.toggleIsFetching();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`,
            {
                withCredentials: true,
            })
            .then(response => {
                this.props.toggleIsFetching();
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    changePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.getUsers(pageNumber);
    }

    componentDidMount() {
        this.getUsers(this.props.currentPage);
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Loader/>}
                <Users usersList={this.props.usersList} toggleFollow={this.props.toggleFollow}
                       setUsers={this.props.setUsers} totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                       changePage={this.changePage}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    toggleFollow, toggleIsFetching, setUsers, setCurrentPage, setTotalUsersCount
})(UsersContainer);