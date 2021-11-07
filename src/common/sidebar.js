import React from "react";
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";

import "../assets/styles/sidebar.css";

const SideBar = () => {
  const cookies = new Cookies();
  const role = cookies.get('role')
  let history = useHistory();

  const logout = () => {
    cookies.remove('role');
    cookies.remove('token');

  history.push('/')
  }
  return (
    <div class="side-nav">
      <nav>
        {role ==='FOOD_ATTENDANT' ? <ul>
          <li><a href="/admin/menu"><i class="fa fa-list"></i>View Orders</a></li>
          <li><a href="#" id=''><i class="fa fa-sign-out"></i>Logout</a></li>
        </ul> :
          <ul>
            <li><a href="/admin"><i class="fa fa-user"></i>Create User</a></li>
            <li><a href="/menu"><i class="fa fa-bars"></i>Create Menu</a></li>
            <li><a href="/users"><i class="fa fa-list" aria-hidden="true"></i>
              View Users</a></li>
            <li><a href="/admin/menu"><i class="fa fa-list"></i>View Menus</a></li>
            <li><a href="#" id='' onClick={() => logout()}><i class="fa fa-sign-out"></i>Logout</a></li>
          </ul>}

      </nav>
    </div>
  );
}


export default SideBar;
