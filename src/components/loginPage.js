import React from "react";
import "../assets/styles/loginpage.css";

const loginPage = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <div class="row">
                    <label for="email">Email</label>
                    <input type="email" name="email" autocomplete="off" placeholder="email@example.com" />
                </div>
                <div class="row">
                    <label for="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}


export default loginPage;
