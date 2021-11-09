import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie';

import "../assets/styles/userform.css";
import "../assets/styles/responses.css";


const UserComponent = () => {

    const [emailerror, setEmailError] = useState()
    const [usernameerror, setUsernameError] = useState()
    const [passworderror, setPasswordError] = useState()
    const [roleerror, setRoleError] = useState()
    const [successResponse, setSuccessResponse] = useState()

    const cookies = new Cookies();
    const role = cookies.get('role')
    let history = useHistory();
  
    if (role != 'ADMIN'){
        history.push('/')  
    }
    // Create a new user...
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, username } = event.target.elements;
        const user_role = document.getElementById("role").value
        const user_password = document.getElementById("psw").value

        const data = {
            email: email.value,
            username: username.value,
            password: user_password,
            role: user_role.toUpperCase()
        }
        const params = {
            "is_admin": "is_admin"
        }

        try {
            const res = await axios.post('https://sapplication.link/users/register', data, {
                params: params
            });
            setSuccessResponse(res.data.message)
        }
        catch (error) {
            setEmailError(error.response.data.error.email)
            setUsernameError(error.response.data.error.username)
            setPasswordError(error.response.data.error.password)
            setRoleError(error.response.data.error.role)

        }

        var form = document.getElementById("form");
        form.reset();
    };
    const inboxOnClick = (event) => {
        event.preventDefault()
        const id = event.target.id
        var errors = document.getElementById(`${id}-errors`);
        errors.innerHTML = ''
        var success = document.getElementById('success-response')
        success.innerHTML = ''
        // errors.remove();

    }
    return (
        <div>
            <div class="container">
                <h1>Add a user</h1>
                <form onSubmit={handleSubmit} id='form'>
                    <h3 class="success-response" id="success-response">{successResponse ? successResponse : ''}</h3>
                    <label for="email"><b>Email</b></label>
                    <h3 class="errors" id="email-errors">{emailerror ? emailerror : ''}</h3>
                    <input type="text" placeholder="Enter Email" name="email" id="email" onClick={inboxOnClick} required />
                    <label for="username"><b>Username</b></label>
                    <h3 class="errors" id="username-errors">{usernameerror ? usernameerror : ''}</h3>
                    <input type="text" placeholder="Enter Username" name="username" id="username" onClick={inboxOnClick} required />
                    <label for="psw"><b>Password</b></label>
                    <h3 class="errors" id="psw-errors">{passworderror ? passworderror : ''}</h3>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" onClick={inboxOnClick} required />
                    <div class="dropdown">
                        <label for="role"><b>Select Role</b></label>
                        <h3 class="errors" id="role-errors">{roleerror ? roleerror : ''}</h3>

                        <select class="role" id='role'>
                            <option>Admin</option>
                            <option>Food_Attendant</option>
                            <option>Normal_User</option>
                        </select>
                    </div>
                    <hr />

                    <button type="submit" class="registerbtn"
                    >Add user</button>
                </form>
            </div>
        </div>
    );
}


export default UserComponent;
