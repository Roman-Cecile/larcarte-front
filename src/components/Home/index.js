import React from "react";
import PropTypes from "prop-types";

// STYLES
import useStyles from "../../styles/Home";

//MUI
import { Button, Typography } from "@material-ui/core";

// COMPONENTS
import Cities from "./Cities";
import Restorer from "./Restorer";
import Footer from "../Footer";
import Searchbar from "../Mobile/Searchbar";

const Home = (props) => {
  const classes = useStyles();

  return (
    <>
      {/* .................HEADER................. */}
      <div className={classes.containerForm}>
        <Searchbar />
        <div className={classes.titleContainer}>
          <Typography variant="h5" align="center">
            Vous ne savez pas où manger ?
          </Typography>
          <Button className={classes.titleButton}>Me géolocaliser</Button>
        </div>
      </div>

      <div className={classes.mainContainer}>
        {/* .................CITIES................. */}
        <div className={classes.citiesContainer}>
          <Cities />
        </div>
        {/* .................RESTORER................. */}
        <Restorer />
      </div>
      <Footer />
    </>
  );
};

Home.propTypes = {};

export default Home;
