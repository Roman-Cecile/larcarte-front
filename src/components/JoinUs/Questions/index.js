import React, { useState } from "react";
import PropTypes from "prop-types";

import useStyles from "../../../styles/JoinUs/questions";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";

import paris from "../../../images/paris.jpg";
import bistrot from "../../../images/bistrot.jpg";
import italy from "../../../images/Italy.jpeg";
import macdo from "../../../images/macdo.jpg";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import useResponsive from "../../../utils/personalHooks/responsive";

const restaurantType = [
  {
    img: paris,
    type: "français",
  },
  {
    img: bistrot,
    type: "bistrot",
  },
  {
    img: italy,
    type: "italien",
  },
  {
    img: macdo,
    type: "fast food",
  },
];

const city = [
  {
    img: paris,
    name: "Paris",
  },
  {
    img: bistrot,
    name: "Montpellier",
  },
  {
    img: italy,
    name: "Lyon",
  },
  {
    img: macdo,
    name: "Bordeaux",
  },
];

const vegan = [
  {
    text: "accueil les végétariens",
    value: true,
  },
  {
    text: "ne peut pas accueillir les végétariens",
    value: false,
  },
];
const Questions = (props) => {
  const classes = useStyles();
  const isMobile = useResponsive();
  const [selected, setselected] = useState(0);

  const [choices, setChoices] = useState({
    city: "",
    restaurantType: "",
    vegan: null,
  });

  return (
    <div
      className={isMobile ? classes.containerMobile : classes.containerDesktop}>
      <Carousel
        selectedItem={selected}
        swipeable={false}
        autoPlay={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        showStatus={false}>
        {/*..........Restaurant type..........*/}
        <div>
          <header className={classes.header}>
            <Typography className={classes.question}>
              Quel est le type de votre restaurant ?
            </Typography>
          </header>
          <section className={classes.section}>
            <List component="ul" aria-label="secondary mailbox folders">
              {restaurantType.map((restaurant) => (
                <ListItem
                  key={restaurant.type}
                  onClick={() => {
                    setChoices((prevState) => ({
                      ...prevState,
                      restaurantType: restaurant.type,
                    }));
                  }}
                  className={`${classes.listItem} ${
                    choices.restaurantType === restaurant.type &&
                    classes.selected
                  }`}>
                  <ListItemAvatar>
                    <Avatar src={restaurant.img} />
                  </ListItemAvatar>
                  <ListItemText primary={restaurant.type} />
                </ListItem>
              ))}
            </List>
          </section>
        </div>
        {/*..........Ville..........*/}
        <div>
          <header className={classes.header}>
            <Typography className={classes.question}>
              Dans quelle ville est votre restaurant ?
            </Typography>
          </header>
          <section className={classes.section}>
            <List component="ul" aria-label="secondary mailbox folders">
              {city.map(({ img, name }) => (
                <ListItem
                  key={name}
                  onClick={() => {
                    setChoices((prevState) => ({
                      ...prevState,
                      city: name,
                    }));
                  }}
                  className={`${classes.listItem} ${
                    choices.city === name && classes.selected
                  }`}>
                  <ListItemAvatar>
                    <Avatar src={img} />
                  </ListItemAvatar>
                  <ListItemText primary={name} />
                </ListItem>
              ))}
            </List>
          </section>
        </div>
        {/* .............Vegetarien friendly...............; */}
        <div>
          <header className={classes.header}>
            <Typography className={classes.question}>
              Votre restaurant ...
            </Typography>
          </header>
          <section className={classes.section}>
            <List component="ul" aria-label="secondary mailbox folders">
              {vegan.map(({ text, value }) => (
                <ListItem
                  key={text}
                  onClick={() => {
                    setChoices((prevState) => ({
                      ...prevState,
                      vegan: value,
                    }));
                  }}
                  className={`${classes.listItem} ${
                    choices.vegan === value && classes.selected
                  }`}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </section>
        </div>
      </Carousel>

      {/* .......... BUTTONS .......... */}
      <Button
        disabled={selected === 0}
        className={classes.buttonPrev}
        onClick={() => selected > 0 && setselected(selected - 1)}>
        <NavigateBefore fontSize="large" />
      </Button>
      <Button
        disabled={selected > 1}
        className={classes.buttonNext}
        onClick={() => selected < 2 && setselected(selected + 1)}>
        <NavigateNext fontSize="large" />
      </Button>
    </div>
  );
};

Questions.propTypes = {};

export default Questions;
