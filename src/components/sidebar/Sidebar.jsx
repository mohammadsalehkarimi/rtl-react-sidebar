/** @format */
import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Clear from "@material-ui/icons/Clear";
import Account from "@material-ui/icons/AccountBoxOutlined";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const handleSidebar = () => {
    document
      .getElementsByClassName("MuiDrawer-paperAnchorDockedRight")[0]
      .setAttribute("style", "display : none !important");
    document
      .getElementsByClassName("toggleSidebarBtn")[0]
      .setAttribute("style", "display : inline !important");
  };

  return (
    <div>
      <div className='mt-3 mr-3 container'>
        <div className='row'>
          <div className='col-12'></div>
        </div>
      </div>
      <Drawer
        className='sidebarContainer text-light'
        variant='permanent'
        anchor='right'>
        <Clear
          className='ml-3 text-dark my-3 toggleIcon clearBtn'
          onClick={handleSidebar}
        />{" "}
        <div className='my-4 text-center '>
          <img
            src='https://wannabe1337.xyz/resources/img/icons/profile.svg'
            width='100px'
            draggable='false'
            className='rounded-circle'
            alt=''
          />
          <br />
          <div className='mx-auto'>
            <p className='mt-2 text-dark'>
              <span className='text-muted'>محمدصالح کریمی</span>
            </p>
          </div>
          <div className='mx-auto'>
            <p className='mt-2 text-dark'>
              <span className='text-muted'>ادمین اصلی</span>{" "}
            </p>
          </div>
        </div>
        <Divider />
        <List>
          <Link to='/'>
            <ListItem className='text-right py-3' dir='rtl' button>
              <ListItemIcon>
                <Account />{" "}
                <span className='mr-4 mt-1 font-bold'>پروفایل کاربری</span>
              </ListItemIcon>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
};
