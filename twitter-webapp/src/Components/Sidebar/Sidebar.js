import React from "react";
import "../../Css/Sidebar/Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOptions.js";
import HomeIcon from "@material-ui/icons/Home";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button } from "@material-ui/core";

function Sidebar() {

  const logout = () => {
    document.cookie = 'emailId' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'userId' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'auth_token' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.replace("http://localhost:3000/login")
  }

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={ListAltIcon} text="Users" />
      <SidebarOption Icon={ExitToAppIcon} text="Logout" logout={logout}/>
     
      
    </div>
  );
}

export default Sidebar;
