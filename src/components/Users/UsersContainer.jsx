import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Loader from "../../assets/loader/Loader";
import {changePage, getUsers, toggleFollow, toggleFollowInProgress, toggleIsFetching} from "../../redux/users-reducer";
import {compose} from "redux";
import {
    getCurrentPage, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersList, getUsersToggleFollowInProgress
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Loader/>}
                <Users usersList={this.props.usersList}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                       toggleFollowInProgress={this.props.toggleFollowInProgress}
                       usersToggleFollowInProgress={this.props.usersToggleFollowInProgress}
                       toggleFollow={this.props.toggleFollow} changePage={this.props.changePage}
                       isAuth={this.props.isAuth}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersList: getUsersList(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        usersToggleFollowInProgress: getUsersToggleFollowInProgress(state),
        isAuth: getIsAuth(state),
    }
};

export default compose(
    connect(mapStateToProps, {
        toggleFollow, toggleIsFetching, toggleFollowInProgress, getUsers, changePage
    }),
    // RedirectWrapper,
)(UsersContainer);
