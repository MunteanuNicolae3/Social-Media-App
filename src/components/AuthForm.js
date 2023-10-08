import classes from './AuthForm.module.scss';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsloading] = useState(false);

    const navigate = useNavigate();

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();


    const toggleAuthState = () => {
        setIsLogin( prevState => !prevState)
    };

    const submitHandler = (event) => {
        event.preventDefault();
        let usernameValue = usernameInputRef.current.value;
        let passwordValue = passwordInputRef.current.value;

        usernameValue = 'eve.holt@reqres.in';
        passwordValue = 'cityslicka';

        setIsloading(true);
        // de aici incepe requestul efectiv
        if (isLogin) {
            // requestul de login
            axios.post('https://reqres.in/api/login', {
                username: usernameValue,
                password: passwordValue
            })
            .then( response => {
                setIsloading(false);
                navigate('/');
            })
            .catch( error => {
                setIsError(true);
                setIsloading(false);
                usernameInputRef.current.value = '';
                passwordInputRef.current.value = '';
            });
        } else {
            axios.post('https://reqres.in/api/register', {
                username: usernameValue,
                password: passwordValue
            })
            .then( response => {
                setIsloading(false);
                navigate('/');
            })
            .catch( error => {
                setIsError(true);
                setIsloading(false);
                usernameInputRef.current.value = '';
                passwordInputRef.current.value = '';
            });
        }
    };

    const actionIsNotLoading = (
        <button>{isLogin ? 'Login' : 'Create new account'}</button>
    )

    return <div className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Create new account'}</h1>
        <form onSubmit={submitHandler} autoComplete='off' noValidate>
            <div className={classes.control}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter your username" ref={usernameInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" placeholder="Enter your password" ref={passwordInputRef}></input>
            </div>
            <div className={classes.actions}>
                {isError && <p>Please try again</p>}
                {isLoading && <p>Sending request...</p>}
                {!isLoading && actionIsNotLoading}
                <button className={classes.toggle} onClick={toggleAuthState}>
                    {isLogin ? 'Create new account' : 'Login with an existing account'}
                </button>
            </div>
        </form>
    </div>
}

export default AuthForm;