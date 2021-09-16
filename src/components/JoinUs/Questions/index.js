import React, { useState } from "react";
import PropTypes from "prop-types";

import useStyles from "../../../styles/JoinUs/questions";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Avatar,
  Button,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";

// COMPONENTS
import Map from "../../Map";

// Cities
import paris from "../../../images/paris.webp";
import bordeaux from "../../../images/bordeaux.webp";
import montpellier from "../../../images/montpellier.webp";
import lyon from "../../../images/lyon.webp";

// restaurants
import bistrot from "../../../images/bistrot.jpg";
import italy from "../../../images/Italy.jpeg";
import macdo from "../../../images/macdo.jpg";

// MUI
import {
  Add,
  CheckCircleOutline,
  NavigateBefore,
  NavigateNext,
} from "@material-ui/icons";

//HOOKS
import useResponsive from "../../../utils/personalHooks/responsive";
import { capitalizeFirstLetter } from "../../../utils/genericFunctions";

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
    coords: { x: 2.333333, y: 48.866667 },
  },
  {
    img: montpellier,
    name: "Montpellier",
    coords: { x: 3.876716, y: 43.610769 },
  },
  {
    img: lyon,
    name: "Lyon",
    coords: { x: 4.85, y: 45.75 },
  },
  {
    img: bordeaux,
    name: "Bordeaux",
    coords: { x: -0.57918, y: 44.837789 },
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
const Questions = ({ create }) => {
  const classes = useStyles();
  const isMobile = useResponsive();
  const [selected, setselected] = useState(0);
  const [choices, setChoices] = useState({
    id: null,
    nom: "",
    ville: "",
    categorie: "",
    adresse: "",
    vegan: null,
    coords: { x: null, y: null },
    menu: {
      name: "",
      data: {},
    },
    picture: {
      name: "",
      data: {},
    },
  });

  // Summary of restaurant datas
  const summary = Object.keys(choices).map(
    (data) =>
      data !== "coords" &&
      data !== "menu" &&
      data !== "picture" &&
      data !== "id" &&
      data !== "vegan" && (
        <Typography key={data} variant="h6">
          {capitalizeFirstLetter(data)}: {choices[data]}
        </Typography>
      )
  );

  // Check is arrow next is disabled or not
  const isDisabled =
    (selected === 0 && choices.nom === "") ||
    (selected === 1 && choices.ville === "") ||
    (selected === 2 && choices.adresse === "") ||
    (selected === 3 && choices.categorie === "") ||
    (selected === 4 && choices.vegan === null) ||
    (selected === 5 && choices.picture.name === "") ||
    (selected === 5 && choices.menu.name === "") ||
    selected === 6;

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
        <div>
          <header className={classes.header}>
            <Typography className={classes.question}>
              Quel est le nom de votre restaurant ?
            </Typography>
          </header>
          <section className={classes.section}>
            <TextField
              value={choices.nom}
              onChange={(event) => {
                setChoices((prevState) => ({
                  ...prevState,
                  nom: event.target.value,
                }));
              }}
            />
          </section>
        </div>
        {/*....................CITIES....................*/}
        <div>
          <header className={classes.header}>
            <Typography className={classes.question}>
              Dans quelle ville est votre restaurant ?
            </Typography>
          </header>
          <section className={classes.section}>
            <List component="ul" aria-label="secondary mailbox folders">
              {city.map(({ img, name, coords }) => (
                <ListItem
                  key={name}
                  onClick={() => {
                    setChoices((prevState) => ({
                      ...prevState,
                      ville: name,
                      coords,
                    }));
                  }}
                  className={`${classes.listItem} ${
                    choices.ville === name && classes.selected
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
        {/*....................ADDRESS MAP....................*/}
        <div>
          <header className={classes.header}>
            <Typography className={classes.question}>
              Cliquez sur le lieux de votre restaurant
            </Typography>
            <Typography component="span">{choices.adresse}</Typography>
          </header>
          <section className={classes.section}>
            {choices.ville !== "" && (
              <Map
                coords={choices.coords}
                restaurantName={choices.nom}
                address={choices.adresse}
                setChoices={setChoices}
                isEditable={true}
              />
            )}
          </section>
        </div>
        {/*....................Restaurant type....................*/}
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
                      categorie: restaurant.type,
                    }));
                  }}
                  className={`${classes.listItem} ${
                    choices.categorie === restaurant.type && classes.selected
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

        {/* ....................Vegetarien friendly......................; */}
        <div>
          <header className={classes.header}>
            <Typography className={classes.question}>
              Votre restaurant...
            </Typography>
          </header>
          <section className={classes.section}>
            <List component="ul" aria-label="secondary mailbox folders">
              {vegan.map(({ text, value }) => (
                <ListItem
                  key={text}
                  onClick={() =>
                    setChoices((prevState) => ({
                      ...prevState,
                      vegan: value,
                    }))
                  }
                  className={`${classes.listItem} ${
                    choices.vegan === value && classes.selected
                  }`}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </section>
        </div>
        {/* ....................UPLOAD MENU......................; */}
        <div>
          <header className={classes.header}>
            <Typography className={classes.question}>
              Importer votre menu au format PDF
            </Typography>
          </header>
          <section className={classes.section}>
            <form>
              <InputLabel htmlFor="addMenu">
                <Tooltip>
                  <Typography>
                    {" "}
                    <Add />
                    Ajouter un menu
                  </Typography>
                </Tooltip>
              </InputLabel>

              <input
                onChange={(event) =>
                  setChoices((prevState) => ({
                    ...prevState,
                    menu: {
                      name: event.target.files[0].name,
                      data: event.target.files[0],
                    },
                  }))
                }
                accept="application/pdf"
                id="addMenu"
                type="file"
                hidden
              />
            </form>
            <div style={{ marginTop: 20 }}>
              {choices.menu.name !== "" && (
                <CheckCircleOutline className={classes.circleProgress} />
              )}
              <Typography>
                {choices.menu.name !== ""
                  ? `${choices.menu.name.substring(0, 10)}... a été importé`
                  : "Aucun fichier importé"}{" "}
              </Typography>
            </div>
          </section>
          <section className={classes.section}>
            {/* ....................UPLOAD PICTURE......................; */}
            <Typography className={classes.question}>
              Importer une photo de votre restaurant
            </Typography>
            <form>
              <InputLabel htmlFor="addPicture">
                <Tooltip>
                  <Typography>
                    {" "}
                    <Add />
                    Ajouter une photo
                  </Typography>
                </Tooltip>
              </InputLabel>

              <input
                onChange={(event) =>
                  setChoices((prevState) => ({
                    ...prevState,
                    picture: {
                      name: event.target.files[0].name,
                      data: event.target.files[0],
                    },
                  }))
                }
                accept="image/*"
                id="addPicture"
                type="file"
                hidden
              />
            </form>
            <div style={{ marginTop: 20 }}>
              {choices.picture.name !== "" && (
                <CheckCircleOutline className={classes.circleProgress} />
              )}
              <Typography>
                {choices.picture.name !== ""
                  ? `${choices.picture.name.substring(0, 10)}... a été importé`
                  : "Aucun fichier importé"}{" "}
              </Typography>
            </div>
          </section>
        </div>
        {/* ....................SUMMARY......................; */}
        <div>
          <header className={classes.header}>
            <Typography className={classes.question}>Récapitulatif</Typography>
          </header>
          <section className={classes.section}>{summary}</section>
          <section className={classes.section}>
            <Button
              onClick={() => create(choices)}
              className={classes.saveButton}>
              Valider
            </Button>
          </section>
        </div>
      </Carousel>

      {/* .......... BUTTONS .......... */}
      <Button
        disabled={selected === 0}
        className={classes.buttonPrev}
        onClick={() => {
          if (selected === 2) {
            setselected(selected - 1);
            setChoices((prevState) => ({
              ...prevState,
              city: "",
              coords: { x: null, y: null },
            }));
          } else if (selected > 0) {
            setselected(selected - 1);
          }
        }}>
        <NavigateBefore fontSize="large" />
      </Button>
      <Button
        disabled={isDisabled}
        className={classes.buttonNext}
        onClick={() => selected < 7 && setselected(selected + 1)}>
        <NavigateNext fontSize="large" />
      </Button>
    </div>
  );
};

Questions.propTypes = {
  create: PropTypes.func.isRequired,
};

export default Questions;
