import React from "react";
import "../../Css/Sidebar/SidebarOption.css";

function SidebarOption({ active, text, Icon,logout }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`} onClick={logout}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
