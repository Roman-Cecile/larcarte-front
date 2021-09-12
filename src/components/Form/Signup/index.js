import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField, Typography } from "@material-ui/core";

// STYLES
import useStyles from "../../../styles/Form";

const Signup = ({ submitSignup }) => {
  const classes = useStyles();
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event, type) => {
    setInput((prevState) => ({ ...prevState, [type]: event.target.value }));
  };
  return (
    <>
      <header className={classes.header}>
        <section>
          <Typography variant="h5" align="center">
            Inscription
          </Typography>
        </section>
      </header>

      <div className={classes.main}>
        <section>
          <form onSubmit={(event) => submitSignup(event, input)}>
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
              label="Mot de passe"
              onChange={(event) => handleChange(event, "password")}
              variant="outlined"
              type="password"
              required
              className={classes.textFieldPW}
              InputProps={{
                className: classes.inputProps,
              }}
            />
            <TextField
              fullWidth
              id="confirmPassword"
              value={input.confirmPassword}
              label="Confirmation"
              onChange={(event) => handleChange(event, "confirmPassword")}
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
      </div>
    </>
  );
};

Signup.propTypes = {
  submitSigup: PropTypes.func,
};

export default Signup;
