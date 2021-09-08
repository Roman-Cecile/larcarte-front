import React, { useState } from "react";
import PropTypes from "prop-types";
import { ClickAwayListener, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Search as SearchIcon } from "@material-ui/icons";

// MUI MEDIA QUERIES
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => {
  const input = {
    borderRadius: 20,
    border: 0,
    backgroundColor: "#fff",
    color: "#000",
    paddingLeft: 8,
    paddingTop: 2,
    height: 35,
  };

  const fakeInput = {
    width: 209,
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  };

  return {
    root: {
      display: "flex",
      justifyContent: "center",
      paddingTop: theme.spacing(8),
    },

    inputMobile: {
      ...input,
    },

    inputDesktop: {
      ...input,
      width: 500,
    },

    fakeInputMobile: {
      ...fakeInput,
    },

    fakeInputDesktop: {
      ...fakeInput,
      width: 500,
      fontSize: "1.2rem",
    },
  };
});

const Searchbar = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");
  const [toggleSearchbar, setToggleSearchbar] = useState(false);

  let searchbar;
  if (toggleSearchbar) {
    searchbar = (
      <form noValidate autoComplete="off">
        <TextField
          placeholder="Rechercher"
          InputProps={{
            className: matches ? classes.inputMobile : classes.inputDesktop,
            disableUnderline: true,
          }}
          autoFocus
        />
      </form>
    );
  } else {
    searchbar = (
      <div
        className={
          matches ? classes.fakeInputMobile : classes.fakeInputDesktop
        }>
        <SearchIcon color="error" /> Quel restaurant ?
      </div>
    );
  }
  return (
    <>
      <ClickAwayListener onClickAway={() => setToggleSearchbar(false)}>
        <div className={classes.root} onClick={() => setToggleSearchbar(true)}>
          {searchbar}
        </div>
      </ClickAwayListener>
    </>
  );
};

Searchbar.propTypes = {};

export default Searchbar;
