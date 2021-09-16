import React from "react";
import PropTypes from "prop-types";
import useStyles from "../../../styles/Home/citiesStyle";
import { Grid, Typography } from "@material-ui/core";
import paris from "../../../images/parisLogo.webp";
import montpellier from "../../../images/montpellierLogo.webp";
import bordeaux from "../../../images/bordeauxLogo.webp";
import marseille from "../../../images/marseille.webp";
import { useHistory } from "react-router-dom";

const Cities = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const showCity = (name) => {
    history.push(`/ville/${name}`);
  };
  const cities = [
    {
      name: "Paris",
      image: paris,
    },
    {
      name: "Marseille",
      image: marseille,
    },
    {
      name: "Montpellier",
      image: montpellier,
    },
    {
      name: "Bordeaux",
      image: bordeaux,
    },
  ];
  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Partez à l'aventure
      </Typography>
      <Grid container justifyContent="space-around">
        {cities.map((city) => (
          <Grid item xs={5} md={2} key={city.name}>
            <div onClick={() => showCity(city.name)}>
              <img
                className={classes.cityPicture}
                src={city.image}
                alt={city.name}
              />
              <Typography className={classes.cityName}>{city.name}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

Cities.propTypes = {};

export default Cities;
