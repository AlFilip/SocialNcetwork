import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Loader from "../../assets/loader/Loader";
import {changePage, getUsers, toggleFollow, toggleFollowInProgress, toggleIsFetching} from "../../redux/users-reducer";
import RedirectWrapper from "../HOC/AuthRedirect";
import {compose} from "redux";


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
                       toggleFollow={this.props.toggleFollow} changePage={this.props.changePage}/>
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
        usersToggleFollowInProgress: state.usersPage.usersToggleFollowInProgress,
    }
};

export default compose(
    connect(mapStateToProps, {
        toggleFollow, toggleIsFetching, toggleFollowInProgress, getUsers, changePage
    }),
    RedirectWrapper,
)(UsersContainer);
