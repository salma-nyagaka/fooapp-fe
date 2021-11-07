import React, { useEffect } from "react";
import "../assets/styles/adminpage.css";
import SideBar from "../common/sidebar";
import UserComponent from "./userComponent";
import MenuComponent from "./menuComponent";
import AllUsersComponent from "./allUsersComponent";

const adminComponent = () => {
  const url = window.location.href.split("/").pop()
  return (
    <div class='admin-page'>
      <section>
        <SideBar />
        <article>{
          url == 'menu' ? <MenuComponent />
            : url == 'admin' ? <UserComponent />
              : url == 'users' ? <AllUsersComponent />
                : <UserComponent />

        }
        </article>
      </section>

    </div>
  );
}


export default adminComponent;
