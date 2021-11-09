import React from "react";
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";

import "../assets/styles/navbar.css";

const Navbar = () => {
  const cookies = new Cookies();
  const role = cookies.get('role')
  let history = useHistory();
  const logout = () => {
    cookies.remove('role');
    cookies.remove('token');

  history.push('/')
  }
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
          <a href="/menu/items" >Menu</a>
          <a href="/orders" >Past Orders</a>
          <a href="/" id='sign-in-btn' onClick={() => logout()}>Logout</a>
        </div>
      </div>
    );
}


export default Navbar;
