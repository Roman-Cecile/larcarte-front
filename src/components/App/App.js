import NavbarMobile from "../Mobile/Navbar";
import NavbarDesktop from "../Desktop/Navbar";

// MUI MEDIA QUERIES
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Components
import Home from "../Home";
import Login from "../LogForm";
import Restaurant from "../Restaurant";
import User from "../User";
import Favorite from "../Favorite";

// Router dom
import { Route, Switch } from "react-router-dom";
import City from "../City";

const App = () => {
  const matches = useMediaQuery("(max-width:600px)");
  let navbar;

  // Conditional display for navbar component
  if (matches) {
    navbar = <NavbarMobile />;
  } else {
    navbar = <NavbarDesktop />;
  }

  return (
    <>
      {navbar}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/restaurant/:name" component={Restaurant} />
        <Route exact path="/ville/:city" component={City} />
        <Route exact path="/u/:id/favoris" component={Favorite} />
        <Route exact path="/u/:id" component={User} />
      </Switch>
    </>
  );
};

export default App;
