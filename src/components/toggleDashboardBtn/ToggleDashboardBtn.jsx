/** @format */
import React from "react";
import Notes from "@material-ui/icons/Notes";

export const ToggleDasboardBtn = () => {
  const handleSidebar = () => {
    document
      .getElementsByClassName("MuiDrawer-paperAnchorDockedRight")[0]
      .setAttribute("style", "display : inline !important");
    document
      .getElementsByClassName("toggleSidebarBtn")[0]
      .setAttribute("style", "display : none !important");
  };

  return (
    <div dir='ltr'>
      <Notes
        className='toggleSidebarBtn toggleIcon text-dark'
        onClick={handleSidebar}
      />
    </div>
  );
};
