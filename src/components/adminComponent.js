import React from "react";
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie';

import "../assets/styles/adminpage.css";
import SideBar from "../common/sidebar";
import UserComponent from "./userComponent";
import MenuComponent from "./menuComponent";
import AllUsersComponent from "./allUsersComponent";

const AdminComponent = () => {
  const url = window.location.href.split("/").pop()
  const cookies = new Cookies();
  const token = cookies.get('token')
  const role = cookies.get('role')
  let history = useHistory();

    if (role != 'ADMIN'){
      history.push('/')  
  }

  return (
    <div class='admin-page'>
      <section>
        <SideBar />
        <article>{
          url === 'menu' ? <MenuComponent />
            : url === 'admin' ? <UserComponent />
              : url === 'users' ? <AllUsersComponent />
                : <UserComponent />

        }
        </article>
      </section>

    </div>
  );
}


export default AdminComponent;
