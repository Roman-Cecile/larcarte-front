import React from "react";

import NavbarMobile from "../Mobile/Navbar";
import NavbarDesktop from "../Desktop/Navbar";

// Components
import Home from "../Home";
import Restaurant from "../Restaurant";
import Favorite from "../Favorite";
import JoinUs from "../JoinUs";

// Router dom
import { Route, Switch } from "react-router-dom";
import City from "../City";

// Containers
import { Form } from "../../containers/Form";
import { User } from "../../containers/User";
import useResponsive from "../../utils/personalHooks/responsive";

const App = ({ isLogin }) => {
  const isMobile = useResponsive();
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
    </>
  );
};

export default App;
