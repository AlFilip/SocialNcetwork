import React from "react";

import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {Input} from "../../assets/formControl/formControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength30 = maxLengthCreator(30);

let LoginForm = props => {
    const {handleSubmit} = props;
    return <form onSubmit={handleSubmit}>
        <div>
            <Field component={Input} placeholder={"Login"} name={"email"} type="text" validate={[required, maxLength30]}/>
        </div>
        <div>
            <Field component={Input} placeholder={"Password"} name={"password"} type="password" validate={[required, maxLength30]}/>
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
        const {email, password, rememberMe} = values;
        this.props.login(email, password, rememberMe);
    }

    render() {
        if (this.props.isAuth) return <Redirect to={"/profile"}/>
        return <>
            <h1>Login</h1>
            <LoginForm onSubmit={this.submit}/>
        </>
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.userAuthData.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);