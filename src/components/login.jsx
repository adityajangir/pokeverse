import React, { useEffect } from 'react'
import { useState } from 'react';
import OneButton from './button';
import FormInput from './input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedin } from '../slices/authdetailsSlice';

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const user = useSelector((state) => state.authdetails.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if(!user.loggedin){
    //         navigate('/signup');
    //     }
    //     console.log(user)
    // })

    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
    };
    const handlePasswordLogin = async (e) => {
        e.preventDefault();
        if(!user){
            navigate('/signup')
        }
        if((user.username===username && user.password===password) | (user.loggedin)){
            dispatch(setLoggedin({loggedin: true}));
            navigate(`/auth/${username}`)
        }else alert("Username or Password wrong");
    };

    return (
        <form onSubmit={handlePasswordLogin} className='w-1/4 m-auto'>
            <div>
                <label className="block mb-1 text-sm font-medium text-gray-500"><span className="text-red-500">*</span>Username</label>
                <FormInput Type="text" value={username} onChange={handleFormInputChange} name="username" TextToPut="Username"></FormInput>
            </div>
            <div>
                <label className="block mb-1 text-sm font-medium text-gray-500"><span className="text-red-500">*</span>Password</label>
                <FormInput Type="password" value={password} onChange={handleFormInputChange} name="password" TextToPut="Password"></FormInput>
            </div>
            <OneButton TextToPut="Login" Type="submit"></OneButton>
            <div className="hidden">
                <OneButton TextToPut="Signup" Type="submit"></OneButton>
            </div>
        </form>
    )
}
