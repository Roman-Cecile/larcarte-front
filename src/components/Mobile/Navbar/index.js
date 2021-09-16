import React from "react";
import PropTypes from "prop-types";

// MUI
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  Explore as ExploreIcon,
  Favorite as FavoriteIcon,
  Home as HomeIcon,
  Person as PersonIcon,
} from "@material-ui/icons";

// MUI STYLES
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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

const Navbar = ({ isLogin }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (event) => {
    if (isLogin) {
      history.push("/u/0");
    } else {
      history.push("/connexion");
    }
  };

  let favorisButton;
  if (isLogin) {
    favorisButton = (
      <BottomNavigationAction
        onClick={() => history.push("/u/0/favoris")}
        label="Favoris"
        icon={<FavoriteIcon />}
      />
    );
  }

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
      {favorisButton}
      <BottomNavigationAction
        onClick={handleClick}
        label="Compte"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
};

Navbar.propTypes = {};

export default Navbar;
