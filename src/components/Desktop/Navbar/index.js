import React from "react";
import useStyles from "../../../styles/Desktop/Navbar";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* <Typography className={classes.title} variant="h6" noWrap>
        La Carte
      </Typography>
      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
        <IconButton
          className={classes.iconLogin}
          size="medium"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true">
          <AccountCircle fontSize="large" />
        </IconButton>
      </div> */}
      <AppBar
        position="static"
        classes={{ colorPrimary: classes.appbar }}
        elevation={0}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            La Carte
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              className={classes.iconLogin}
              size="medium"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true">
              <AccountCircle fontSize="large" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
