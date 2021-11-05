import React from "react";
import "../assets/styles/userform.css";

const UserComponent = () => {
    return (
        <div>
            <div class="container">
                <h1>Add a user</h1>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />
                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" id="username" required />
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
                <div class="dropdown">
                    <label for="psw"><b>Select Role</b></label>
                    <select class="role">
                        <option>Admin</option>
                        <option>Food attendant</option>
                        <option>Normal User</option>
                    </select>
                </div>
                <hr />

                <button type="submit" class="registerbtn">Add user</button>
            </div>
        </div>
    );
}


export default UserComponent;
