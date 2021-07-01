import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../Redux/auth-reducer'
import { requiredFields } from '../../utils/validators/validators'
import { Input } from '../Common/Preloader/FormsControlls/FormsControls'
import s from './Login.module.scss'


const LoginForm = (props) => {
    return <form className={s.form_login} onSubmit={props.handleSubmit}>
        <p>
            <Field validate={[requiredFields]} placeholder={'enter your email'} component={Input} name={'email'} />
        </p>
        <p>
            <Field validate={[requiredFields]} placeholder={'enter your password'} type='password' component={Input} name={'password'} />
        </p>
        <label className={s.input_check}>
            <Field type="checkbox" component={Input} name={'rememberMe'}/> Remeber me
        </label>

        {props.error && <div className={s.form_error}>{props.error}</div> }

        <p><button>Login</button></p>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        // console.log('formData', formData);
        let {email, password, rememberMe} = formData;
        props.login(email, password, rememberMe)
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div className={s.form_wrapper}>
        <h1>Log in</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);