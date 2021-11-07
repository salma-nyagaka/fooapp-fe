import React from "react";
import "../assets/styles/navbar.css";

const Navbar = () => {
    return (
        <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
          <div class="nav-title">
            FastFoodApp
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links">
          <a href="/" >Menu</a>
          <a href="/orders" >Past Orders</a>
          <a href="/login" id='sign-in-btn'>Sign In</a>
        </div>
      </div>
    );
}


export default Navbar;
