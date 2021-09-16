import React, { useState } from "react";
import PropTypes from "prop-types";
import { ClickAwayListener, TextField } from "@material-ui/core";

import useStyles from "../../../styles/Mobile/searchbar";
import { Search as SearchIcon } from "@material-ui/icons";

// HOOKS
import useResponsive from "../../../utils/personalHooks/responsive";

const Searchbar = () => {
  const classes = useStyles();
  const isMobile = useResponsive();
  const [toggleSearchbar, setToggleSearchbar] = useState(false);

  let searchbar;
  if (toggleSearchbar) {
    searchbar = (
      <form noValidate autoComplete="off">
        <TextField
          placeholder="Rechercher"
          InputProps={{
            className: isMobile ? classes.inputMobile : classes.inputDesktop,
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
          isMobile ? classes.fakeInputMobile : classes.fakeInputDesktop
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
