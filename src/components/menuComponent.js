import React from "react";
import "../assets/styles/userform.css";
import SideBar from "../common/sidebar";

const MenuComponent = () => {
    return (
        <div>
            <SideBar/>
            <article>
            <div class="container">
                <h1>Add a menu item</h1>
                <label for="email"><b>Name</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />
                <label for="username"><b>Price</b></label>
                <input type="text" placeholder="Enter Username" name="username" id="username" required />
                <label for="description"><b>Description</b></label>
                <textarea id="description" name="description" rows="4" cols="50">
                </textarea>  <hr />

                <button type="submit" class="registerbtn">Add menu item</button>
            </div>
            </article>
        </div>
    );
}


export default MenuComponent;
