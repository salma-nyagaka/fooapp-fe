import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "../assets/styles/loginpage.css";
import Navbar from "../common/navbar";
import Cookies from 'universal-cookie';


const LoginComponent = () => {
    const [error, setErrors] = useState()
    const [successResponse, setSuccessResponse] = useState()
    const [data, setData] = useState()
    const cookies = new Cookies();
    let history = useHistory();

    // Login user...
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, psw } = event.target.elements;
        console.log(event.target.elements.email)

        const data = {
            email: email.value,
            password: psw.value
        }

        try {
            const res = await axios.post('http://ec2-18-203-249-202.eu-west-1.compute.amazonaws.com/users/login', data);
            setSuccessResponse(res.data.message)
            setData(res.data.data)
            const role = res.data.data.role
            const token = res.data.data.token
            cookies.set('token', token)
            var signinBtn = document.getElementById("sign-in-btn");
            document.getElementById("sign-in-btn").id = 'logout-btn'
            signinBtn.innerHTML = 'LOGOUT'
            if (role == 'ADMIN')
                history.push('/admin')
            else if (role == 'FOOD_ATTENDANT')
                history.push('/attendant')  
            else if (role == 'NORMAL_USER')
                history.push('/')

        } catch (error) {
            setErrors(error.response.data.error.non_field_errors)

        }
    };

    const inboxOnClick = (event) => {
        event.preventDefault()
        var errors = document.getElementById(`errors`);
        errors.innerHTML = ''
        var success = document.getElementById('success-response')
        success.innerHTML = ''

    }
    return (
        <div className="login">
            <Navbar />
            <h1>Login</h1>
            <form onSubmit={handleSubmit} id='form'>
                <h3 class="success-response" id="success-response">{successResponse ? successResponse : ''}</h3>
                <h3 class="errors" id="errors">{error ? error : ''}</h3>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" onClick={inboxOnClick} required />
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" onClick={inboxOnClick} required />

                <hr />

                <button type="submit" class="registerbtn"
                >Add user</button>
            </form>
        </div>
    );
}


export default LoginComponent;
