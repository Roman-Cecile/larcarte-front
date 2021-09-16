import React from "react";

// STYLES
import useStyles from "../../../styles/Desktop/Navbar";

// MUI
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import { AccountCircle, Explore as ExploreIcon } from "@material-ui/icons";

import { useHistory } from "react-router-dom";

// COMPONENTS
import { Form } from "../../../containers/Form";

const Navbar = ({ isLogin }) => {
  const classes = useStyles();
  const history = useHistory();
  // Toggle dialog
  const [open, setOpen] = React.useState(false);

  const toggleDialog = () => {
    if (isLogin) {
      history.push("/u/0");
    } else {
      setOpen(!open);
    }
  };

  return (
    <>
      {/* .................NAVBAR................. */}
      <div className={classes.container}>
        <AppBar
          position="static"
          classes={{ colorPrimary: classes.appbar }}
          elevation={0}>
          <Toolbar>
            <Typography
              onClick={() => history.push("/")}
              className={classes.title}
              variant="h6"
              noWrap>
              La Carte
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                onClick={() => history.push("/carte")}
                className={classes.iconLogin}
                size="medium"
                edge="end"
                aria-label="show map">
                <ExploreIcon fontSize="large" />
              </IconButton>
              <IconButton
                onClick={toggleDialog}
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
      {/* .................DIALOG LOG................. */}
      <Dialog
        open={open}
        onClose={toggleDialog}
        aria-labelledby="form-dialog-login">
        <DialogContent>
          <Form />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
