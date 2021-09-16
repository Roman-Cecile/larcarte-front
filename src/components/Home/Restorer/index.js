import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";

import useStyles from "../../../styles/Home/restorerStyle";

import restorer from "../../../images/restorer.webp";
import { useHistory } from "react-router-dom";
import useResponsive from "../../../utils/personalHooks/responsive";

const Restorer = (props) => {
  const isMobile = useResponsive();
  const classes = useStyles();
  const history = useHistory();

  let card;
  const cardText = {
    title: "Vous êtes restaurateur ?",
    text: "Facilitez-vous la vie en nous laissant gérer vos cartes pour les mettre en valeur",
  };

  const handleClick = () => {
    history.push("/rejoindre-la-carte");
  };

  if (isMobile) {
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
          <Button variant="outlined" className={classes.button}>
            Rejoindre
          </Button>
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
            <Button variant="outlined">Rejoindre</Button>
          </CardContent>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <Card
          onClick={handleClick}
          className={isMobile ? classes.card : classes.cardMobile}>
          {card}
        </Card>
      </div>
    </>
  );
};

Restorer.propTypes = {};

export default Restorer;
