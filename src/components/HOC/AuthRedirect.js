import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuth: state.userAuthData.isAuth
    }
}

const RedirectWrapper = (Component) => {
    class RedirectWrapper extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps)(RedirectWrapper);
}

export default RedirectWrapper;
