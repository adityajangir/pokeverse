import React from 'react'
import { useState } from 'react';
import OneButton from './button';
import FormInput from './input';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../slices/authdetailsSlice';


export default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
    };
    const handlePasswordLogin = async (e) => {
        e.preventDefault();
        dispatch(signup({username, password, loggedin: false}));
        navigate('/login');
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
            <OneButton TextToPut="Signup" Type="submit"></OneButton>
            <div className="hidden">
                <OneButton TextToPut="Login" Type="submit"></OneButton>
            </div>
        </form>
    )
}
