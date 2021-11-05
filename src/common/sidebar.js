import React from "react";
import "../assets/styles/sidebar.css";

const SideBar = () => {
    return (
<div class="side-nav">
<nav>
    <ul>
      <li><a href="/admin"><i class="fa fa-user"></i>Create User</a></li>
      <li><a href="/menu"><i class="fa fa-bars"></i>Create Menu</a></li>
      <li><a href="/users"><i class="fa fa-list" aria-hidden="true"></i>
View Users</a></li>
<li><a href="/admin/menu"><i class="fa fa-list"></i>View Menus</a></li>
<li><a href="#"><i class="fa fa-sign-out"></i>Logout</a></li>

    </ul>
  </nav>
  {/* <a href="#about"><i class="fa fa-user"></i>Create User</a>
  <a href="#clients"><i class="fa fa-bars"></i>Create Menu</a>
  <a href="#services"><i class="fa fa-list" aria-hidden="true"></i>
View Users</a>
<a href="#clients"><i class="fa fa-list"></i>View Menus</a>
<a href="#clients"><i class="fa fa-sign-out"></i>Logout</a> */}

</div>
    );
}


export default SideBar;
