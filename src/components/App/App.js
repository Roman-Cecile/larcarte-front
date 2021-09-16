import React from "react";

import NavbarMobile from "../Mobile/Navbar";
import NavbarDesktop from "../Desktop/Navbar";

// Components
import Home from "../Home";
import Restaurant from "../Restaurant";
import Favorite from "../Favorite";
import JoinUs from "../JoinUs";
import Map from "../Map";

// Router dom
import { Route, Switch } from "react-router-dom";
import City from "../City";

// Containers
import { Form } from "../../containers/Form";
import { User } from "../../containers/User";
import useResponsive from "../../utils/personalHooks/responsive";

// MUI
import { Backdrop, CircularProgress } from "@material-ui/core";

// STYLES
import useStyles from "../../styles/App";

const App = ({ isLogin, loader }) => {
  const isMobile = useResponsive();
  const classes = useStyles();
  let navbar;
  // Conditional display for navbar component
  if (isMobile) {
    navbar = <NavbarMobile isLogin={isLogin} />;
  } else {
    navbar = <NavbarDesktop isLogin={isLogin} />;
  }

  return (
    <>
      {navbar}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurant/:name" component={Restaurant} />
        <Route exact path="/ville/:city" component={City} />
        <Route exact path="/rejoindre-la-carte" component={JoinUs} />
        <Route exact path="/carte">
          <Map fromMenu={true} coords={{ x: 0.0, y: 0.0 }} />
        </Route>
        {isLogin ? (
          <Route path="/u">
            <Switch>
              <Route exact path="/u/:id" component={User} />
              <Route exact path="/u/:id/favoris" component={Favorite} />
              <Route>404</Route>
            </Switch>
          </Route>
        ) : (
          <>
            <Route exact path="/connexion" component={Form} />
          </>
        )}
        <Route>404</Route>
      </Switch>
      <Backdrop
        classes={{ root: classes.backDrop }}
        sx={{ color: "#fff", zIndex: 0 }}
        open={loader}>
        <CircularProgress />
      </Backdrop>
    </>
  );
};

export default App;
