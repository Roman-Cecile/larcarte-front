import React from "react";
import PropTypes from "prop-types";

import useStyles from "../../styles/Footer";
import { Typography } from "@material-ui/core";

const Footer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <Typography>Roman.C</Typography>
        <Typography>Me contacter</Typography>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
