import NavbarMobile from "../Mobile/Navbar";
import NavbarDesktop from "../Desktop/Navbar";

// MUI MEDIA QUERIES
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Components
import Home from "../Home";
import Login from "../LogForm";
import Restaurant from "../Restaurant";

// Router dom
import { Route, Switch } from "react-router-dom";

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
        <Route exact path="/restaurant" component={Restaurant} />
      </Switch>
    </>
  );
};

export default App;
