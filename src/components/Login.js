import React from 'react';
import {useDispatch} from "react-redux";
import {login ,logout} from '../features/user';

const Login = () => {

    const dispatch = useDispatch()
    return (<>
        <button onClick={() => dispatch(login({name: 'Prle', age: 31, email: 'devprle@gmail.com'}))}>
            Login
        </button>
        <button onClick={() => dispatch(logout())}>
            Logout
        </button>
    </>);

}

export default Login;