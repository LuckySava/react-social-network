import { Field, reduxForm } from 'redux-form'
import { requiredFields } from '../../utils/validators/validators'
import { Input } from '../Common/Preloader/FormsControlls/FormsControls'
import s from './Login.module.scss'


const LoginForm = (props) => {
    return <form className={s.form_login} onSubmit={props.handleSubmit}>
        <p>
            <Field validate={[requiredFields]} placeholder={'enter your login'} component={Input} name={'login'} />
        </p>
        <p>
            <Field validate={[requiredFields]} placeholder={'enter your password'} component={Input} name={'password'} />
        </p>
        <label className={s.input_check}>
            <Field type="checkbox" component={Input} name={'rememberMe'}/> Remeber me
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