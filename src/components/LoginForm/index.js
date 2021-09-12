import React, { useState } from "react";
import PropTypes from "prop-types";

// MUI
import { Button, TextField, Typography } from "@material-ui/core";
import { Facebook as FacebookIcon } from "@material-ui/icons";

// SVG
import { ReactComponent as Logo } from "../../images/googleIcon.svg";

// STYLES
import useStyles from "../../styles/LoginForm";

const LoginForm = ({ submitLogin }) => {
  const classes = useStyles();
  const [input, setInput] = useState({ email: "", password: "" });

  const handleChange = (event, type) => {
    setInput((prevState) => ({ ...prevState, [type]: event.target.value }));
  };

  return (
    <>
      <header className={classes.header}>
        <section>
          <Typography variant="h5" align="center">
            Connexion
          </Typography>
        </section>
      </header>

      <main className={classes.main}>
        <section>
          <form onSubmit={(event) => submitLogin(event, input)}>
            <TextField
              fullWidth
              id="email"
              value={input.email}
              label="Email"
              variant="outlined"
              required
              onChange={(event) => handleChange(event, "email")}
              className={classes.textFieldEmail}
              InputProps={{
                className: classes.inputProps,
              }}
            />
            <TextField
              fullWidth
              id="password"
              value={input.password}
              label="Password"
              onChange={(event) => handleChange(event, "password")}
              variant="outlined"
              type="password"
              required
              className={classes.textFieldPW}
              InputProps={{
                className: classes.inputProps,
              }}
            />
            <Button
              type="submit"
              fullWidth
              size="large"
              className={classes.buttonLog}>
              Continuer
            </Button>
          </form>
        </section>
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
      </main>
      <footer>
        <Typography component="p" color="textSecondary" align="center">
          Pas encore inscrit ?
        </Typography>
        <Typography component="p" color="textPrimary" align="center">
          Rejoins nous
        </Typography>
      </footer>
    </>
  );
};

LoginForm.propTypes = {
  submitLogin: PropTypes.func.isRequired,
};

export default LoginForm;
