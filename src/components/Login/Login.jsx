import React from "react";

import {Field, reduxForm} from 'redux-form'
import {loginAPI} from "../api/api";
import {connect} from "react-redux";
import {getUserAuthData} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

let LoginForm = props => {
    const {handleSubmit} = props;
    return <form onSubmit={handleSubmit}>
        <div>
            <Field component={"input"} placeholder={"Login"} name={"login"} type="text"/>
        </div>
        <div>
            <Field component={"input"} placeholder={"Password"} name={"password"} type="text"/>
        </div>
        <div>
            <Field component={"input"} name={"rememberMe"} type="checkbox"/> Remember me
        </div>
        <div>
            <button type={"submit"}>Login</button>
        </div>
    </form>
}

LoginForm = reduxForm({form: "login"})(LoginForm)

class Login extends React.Component {
    submit = values => {
        const {login, password, rememberMe} = values;
        loginAPI.login(login, password, rememberMe).then(data => {
            this.props.getUserAuthData();
            console.log(data);
        });
    }

    render() {
        if (this.props.userAuthData.isAuth) return <Redirect to={"/profile"}/>
        return <>
            <h1>Login</h1>
            <LoginForm onSubmit={this.submit}/>
        </>
    }
}

const mapStateToProps = state => {
    return {
        userAuthData: state.userAuthData
    }
}
export default connect(mapStateToProps, {getUserAuthData})(Login);