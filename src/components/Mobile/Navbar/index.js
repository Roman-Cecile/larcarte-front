import React, { useState } from "react";
import PropTypes from "prop-types";

// MUI
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  Explore as ExploreIcon,
  Home as HomeIcon,
  Person as PersonIcon,
} from "@material-ui/icons";

// MUI STYLES
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 5,
    borderTop: "solid 1px #dadada",
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        onClick={() => history.push("/map")}
        label="Carte"
        icon={<ExploreIcon />}
      />
      <BottomNavigationAction
        onClick={() => history.push("/")}
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        onClick={() => history.push("/login")}
        label="Compte"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
};

Navbar.propTypes = {};

export default Navbar;
