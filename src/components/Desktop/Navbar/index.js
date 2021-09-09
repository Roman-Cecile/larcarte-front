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
import { AccountCircle } from "@material-ui/icons";

// COMPONENTS
import LogForm from "../../LogForm";

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  // Toggle dialog
  const [open, setOpen] = React.useState(false);

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
                onClick={() => setOpen(true)}
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
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-login">
        <DialogContent>
          <LogForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
