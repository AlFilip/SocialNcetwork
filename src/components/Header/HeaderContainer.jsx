import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserAuthData, toggleAuth} from "../../redux/auth-reducer";
import {authAPI} from "../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.authMe()
            .then(data => {
                const {login, id, email} = data.data;
                if (data.resultCode === 0) {
                    this.props.setUserAuthData(login, id, email);
                    this.props.toggleAuth(true);
                }
            });
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>;
    }
}

const mapStateToProps = (state) => ({
    login: state.userAuthData.login,
    isAuth: state.userAuthData.isAuth,
});

export default connect(mapStateToProps, {setUserAuthData, toggleAuth})(HeaderContainer);