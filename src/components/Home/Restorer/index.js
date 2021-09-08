import React from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";

import useStyles from "../../../styles/Home/restorerStyle";

import restorer from "../../../images/restorer.webp";

const Restorer = (props) => {
  const matches = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  let card;
  const cardText = {
    title: "Vous êtes restaurateur ?",
    text: "Facilitez-vous la vie en nous laissant gérer vos cartes pour les mettre en valeur",
  };

  if (matches) {
    card = (
      <>
        <CardHeader
          classes={{ title: classes.cardHeaderTitle }}
          title={cardText.title}
        />
        <CardMedia
          className={classes.media}
          image={restorer}
          title="Picture from unsplash"
        />
        <CardContent>
          <Typography component="p">{cardText.text}</Typography>
        </CardContent>
      </>
    );
  } else {
    card = (
      <>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {cardText.title}
            </Typography>
            <Typography component="p">{cardText.text}</Typography>
          </CardContent>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <Card className={matches ? classes.card : classes.cardMobile}>
          {card}
        </Card>
      </div>
    </>
  );
};

Restorer.propTypes = {};

export default Restorer;
