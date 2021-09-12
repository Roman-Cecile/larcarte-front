import React, { useState } from "react";
import PropTypes from "prop-types";

// MUI
import { Button, TextField, Typography } from "@material-ui/core";

// STYLES
import useStyles from "../../../styles/Form";

const Signin = ({ submitSignin }) => {
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

      <div className={classes.main}>
        <section>
          <form onSubmit={(event) => submitSignin(event, input)}>
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
      </div>
    </>
  );
};

Signin.propTypes = {
  submitSignin: PropTypes.func.isRequired,
};

export default Signin;
