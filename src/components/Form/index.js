import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "@material-ui/core";
import { Facebook as FacebookIcon } from "@material-ui/icons";

// SVG
import { ReactComponent as Logo } from "../../images/googleIcon.svg";
// STYLES
import useStyles from "../../styles/Form";
import Signin from "./Signin";
import Signup from "./Signup";

const Form = ({ submitSignin, submitSignup }) => {
  const classes = useStyles();
  const [isSignin, setIsSignin] = useState(true);

  const handleClick = () => {
    setIsSignin(!isSignin);
  };

  let formComponent;
  let footer;

  if (isSignin) {
    formComponent = <Signin submitSignin={submitSignin} />;
    footer = (
      <>
        <Typography component="p" color="textSecondary" align="center">
          Pas encore inscrit ?
        </Typography>
        <Typography
          style={{ cursor: "pointer" }}
          onClick={handleClick}
          component="p"
          color="textPrimary"
          align="center">
          Rejoins nous
        </Typography>
      </>
    );
  } else {
    formComponent = <Signup submitSignup={submitSignup} />;
    footer = (
      <>
        <Typography component="p" color="textSecondary" align="center">
          Déjà inscrit ?
        </Typography>
        <Typography
          style={{ cursor: "pointer" }}
          onClick={handleClick}
          component="p"
          color="textPrimary"
          align="center">
          Connecte toi
        </Typography>
      </>
    );
  }

  return (
    <main className={classes.main}>
      {formComponent}
      <section className={classes.section}>
        <Typography align="center" variant="subtitle2">
          ou
        </Typography>
        <Button
          endIcon={<FacebookIcon style={{ color: "#4267B2" }} />}
          variant="outlined"
          fullWidth
          id="facebook"
          className={classes.buttonFB}>
          Continuer avec Facebook
        </Button>
        <Button endIcon={<Logo />} variant="outlined" id="google" fullWidth>
          Continuer avec Google
        </Button>
      </section>
      <footer>{footer}</footer>
    </main>
  );
};

Form.propTypes = {};

export default Form;
