import NavbarMobile from "../Mobile/Navbar";
import NavbarDesktop from "../Desktop/Navbar";

// MUI MEDIA QUERIES
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Components
import Home from "../Home";
import Restaurant from "../Restaurant";
import User from "../User";
import Favorite from "../Favorite";

// Router dom
import { Route, Switch } from "react-router-dom";
import City from "../City";

// Containers
import { LoginForm } from "../../containers/LoginForm";

const App = () => {
  const matches = useMediaQuery("(max-width:600px)");
  let navbar;

  // Conditional display for navbar component
  if (matches) {
    navbar = <NavbarMobile />;
  } else {
    navbar = <NavbarDesktop />;
  }

  const isLog = false;

  return (
    <>
      {navbar}
      <Switch>
        <Route exact path="/" component={Home} />
        {isLog ? (
          <Route exact path="/u/:id" component={User} />
        ) : (
          <Route exact path="/login" component={LoginForm} />
        )}
        <Route exact path="/restaurant/:name" component={Restaurant} />
        <Route exact path="/ville/:city" component={City} />
        <Route exact path="/u/:id/favoris" component={Favorite} />
        <Route>404</Route>
      </Switch>
    </>
  );
};

export default App;
