import React, { useState } from "react";
import PropTypes from "prop-types";
import { ClickAwayListener, TextField } from "@material-ui/core";

import useStyles from "../../../styles/Mobile/searchbar";
import { Search as SearchIcon } from "@material-ui/icons";

// MUI MEDIA QUERIES
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
