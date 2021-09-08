import NavbarMobile from "../Mobile/Navbar";
import NavbarDesktop from "../Desktop/Navbar";

// MUI MEDIA QUERIES
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Home from "../Home";
import Footer from "../Footer";

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
      <Home />
      <Footer />
    </>
  );
};

export default App;
