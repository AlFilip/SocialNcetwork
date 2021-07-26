import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} logOut={this.props.logOut}/>;
    }
}

const mapStateToProps = (state) => ({
    login: state.userAuthData.login,
    isAuth: state.userAuthData.isAuth,
});

export default connect(mapStateToProps, {logOut})(HeaderContainer);