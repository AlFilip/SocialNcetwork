import React from "react";

import {Field, reduxForm} from 'redux-form'
import {loginAPI} from "../api/api";

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
            <Field component={"input"} name={"rememberMe"} type="checkbox"/>
        </div>
        <div>
            <button type={"submit"}>Submit</button>
        </div>
    </form>
}

LoginForm = reduxForm({form: "login"})(LoginForm)

class Login extends React.Component {
    submit =  values => {
        const {login, password, rememberMe} = values;
        loginAPI.login(login, password, rememberMe).then(data=> console.log(data));
    }

    render() {
        return <>
            <h1>Login</h1>
            <LoginForm onSubmit={this.submit}/>
        </>
    }
}

export default Login;