import React from "react";
import PropTypes from "prop-types";

// MUI
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  Restore as RestoreIcon,
  Favorite as FavoriteIcon,
  LocationOn as LocationOnIcon,
} from "@material-ui/icons";

// MUI STYLES
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
      <NavLink to="/">
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      </NavLink>
      <NavLink to="/restaurant">
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      </NavLink>
      <NavLink to="/login">
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </NavLink>
    </BottomNavigation>
  );
};

Navbar.propTypes = {};

export default Navbar;
