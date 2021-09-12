import React, { useRef } from "react";

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
import { AccountCircle } from "@material-ui/icons";

// COMPONENTS
import { LoginForm } from "../../../containers/LoginForm";

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  // Toggle dialog
  const [open, setOpen] = React.useState(false);

  const toggleDialog = () => {
    setOpen(!open);
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
            <Typography className={classes.title} variant="h6" noWrap>
              La Carte
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
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
          <LoginForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
