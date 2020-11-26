/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Typography } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export const Sidebar = () => {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='right'>
        <div className={classes.toolbar}>
          <Typography className='mt-3 text-center' variant='h6' noWrap>
            محمدصالح کریمی
          </Typography>
        </div>
        <Divider />
        <List>
          {["صندوق دریافت", "برگزیده ها", "ارسال ایمیل", "پیش نویس ها"].map(
            (text, index) => (
              <ListItem dir='rtl' className='text-right' button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ),
          )}
        </List>
        <Divider />
        <List>
          {["صندوق دریافت", "برگزیده ها", "ارسال ایمیل", "پیش نویس ها"].map(
            (text, index) => (
              <ListItem dir='rtl' className='text-right' button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ),
          )}
        </List>
        <Divider />
        <List>
          {["صندوق دریافت", "برگزیده ها", "ارسال ایمیل", "پیش نویس ها"].map(
            (text, index) => (
              <ListItem dir='rtl' className='text-right' button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ),
          )}
        </List>
        <Divider />
        <List>
          {["صندوق دریافت", "برگزیده ها", "ارسال ایمیل", "پیش نویس ها"].map(
            (text, index) => (
              <ListItem dir='rtl' className='text-right' button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ),
          )}
        </List>
      </Drawer>
    </div>
  );
};
