import React, { useEffect } from "react";
import "../assets/styles/adminpage.css";
import SideBar from "../common/sidebar";
import UserComponent from "../components/userComponent";
import MenuComponent from "../components/menuComponent";
import AllUsersComponent from "./allUsersComponent";

const adminPage = () => {
  const url = window.location.href.split("/").pop()
  return (
<div class='admin-page'>

<section>
  <SideBar/>
  <article>{
      url=='menu' ? <MenuComponent/>
    : url=='admin' ? <UserComponent/>
    : url=='users' ? <AllUsersComponent/>
    :<UserComponent/>
   
  }
  </article>
</section>

</div>
  );
}


export default adminPage;
