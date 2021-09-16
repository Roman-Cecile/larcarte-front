import React, { useState } from "react";
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";

// STYLES
import useStyles from "../../styles/JoinUs";
// HOOKS
import useResponsive from "../../utils/personalHooks/responsive";

// Container
import { Questions } from "../../containers/Questions";

// import { useHistory } from "react-router-dom";
import Init from "./Init";

const JoinUs = (props) => {
  window.scrollTo(0, 0);
  const classes = useStyles();
  const isMobile = useResponsive();
  // const history = useHistory();

  const [startQuestion, setStartQuestion] = useState(false);

  let questions;
  if (startQuestion) {
    questions = <Questions />;
  } else {
    questions = <Init setStartQuestion={setStartQuestion} />;
  }
  return (
    <>
      <main>
        <section>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <section
                className={
                  isMobile ? classes.bannerMobile : classes.bannerDesktop
                }>
                <Typography
                  className={
                    isMobile
                      ? classes.textFocusInMobile
                      : classes.textFocusInDesktop
                  }
                  variant={isMobile ? "h4" : "h3"}
                  component="p"
                  style={{ fontWeight: "bold", alignItems: "center" }}>
                  Rejoignez nous
                </Typography>
              </section>
            </Grid>
            <Grid item xs={12} sm={6}>
              <section
                className={
                  isMobile
                    ? startQuestion === "init"
                      ? classes.containerTextMobileInit
                      : classes.containerTextMobileSteps
                    : classes.containerTextDesktop
                }>
                {questions}
              </section>
            </Grid>
          </Grid>
        </section>
      </main>
    </>
  );
};

JoinUs.propTypes = {};

export default JoinUs;
