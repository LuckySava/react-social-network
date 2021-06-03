import { Field, reduxForm } from 'redux-form'
import s from './Login.module.scss'


const LoginForm = (props) => {
    return <form className={s.form_login} onSubmit={props.handleSubmit}>
        <p>
            <Field placeholder={'enter your login'} component={'input'} name={'login'} />
        </p>
        <p>
            <Field placeholder={'enter your password'} component={'input'} name={'password'} />
        </p>
        <label className={s.input_check}>
            <Field type="checkbox" component={'input'} name={'rememberMe'}/> Remeber me
        </label>
        <p><button>Login</button></p>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log('formData', formData);
    }
    
    return <div className={s.form_wrapper}>
        <h1>Log in</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login;