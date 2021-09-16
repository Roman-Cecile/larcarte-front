import React from "react";
import PropTypes from "prop-types";
import useStyles from "../../../styles/JoinUs";
import useResponsive from "../../../utils/personalHooks/responsive";
import { Button, Typography } from "@material-ui/core";
const Init = ({ setStartQuestion }) => {
  const classes = useStyles();
  const isMobile = useResponsive();
  return (
    <div className={isMobile ? classes.textMobile : classes.textDesktop}>
      <div style={{ padding: 20 }}>
        <Typography component="p" variant="h5" style={{ fontWeight: "bold" }}>
          Augmentez votre visibilité sans contrainte
        </Typography>
        <Typography component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
          dictum eros. Ut non erat nec elit aliquam bibendum.
        </Typography>
      </div>

      <div
        className={
          isMobile
            ? classes.buttonContainerMobile
            : classes.buttonContainerDesktop
        }>
        <Button
          onClick={() => setStartQuestion(true)}
          size="large"
          fullWidth
          variant="outlined"
          className={classes.button}>
          Démarrer
        </Button>
      </div>
    </div>
  );
};

Init.propTypes = {
  setStartQuestion: PropTypes.func.isRequired,
};

export default Init;
