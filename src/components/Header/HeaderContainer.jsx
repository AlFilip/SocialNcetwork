import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserAuthData, toggleAuth} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                const {login, id, email} = response.data.data;
                if (response.status === 200 && response.data.resultCode === 0) {
                    this.props.setUserAuthData(login, id, email);
                    this.props.toggleAuth(true);
                }
            });
    }
    render() {
        return <Header login={this.props.login}/>;
    }
}

const mapStateToProps = (state) => ({
    login: state.userAuthData.login,
});

export default connect(mapStateToProps, {setUserAuthData, toggleAuth})(HeaderContainer);