import React from "react";
import PropTypes from "prop-types";

// STYLES
import useStyles from "../../styles/Restaurant";

// MUI
import { Button, Typography } from "@material-ui/core";
import {
  Stars as StarsIcon,
  Eco as EcoIcon,
  Restaurant as RestaurantIcon,
  Euro as EuroICon,
} from "@material-ui/icons";

// IMG
import carte from "../../images/exemplemap.png";

// COMPONENTS
import Footer from "../Footer";

const data = {
  name: "Le magnifique",
  mark: 432,
  city: "Montpellier",
  country: "France",
  category: "français",
  address: "30 rue ray charles",
  minPrice: 10,
  maxPrice: 22,
  description:
    "Charmant appartement coloré, de 29 m2, composé d'une chambre, une salle de séjour, une cuisine, une salle de bains et un balcon. Près du centre du Marais, le quartier le plus branché de la ville, c'est la solution idéale pour des courts séjours riches en amusement.",
  vegan: true,
  menu: "",
};

const Restaurant = (props) => {
  const classes = useStyles();

  let isVeganFriendly;
  if (data.vegan) {
    isVeganFriendly = (
      <Typography component="p" className={classes.flex}>
        <EcoIcon
          style={{ color: data.vegan ? "green" : "" }}
          fontSize="small"
        />
        Vegan friendly
      </Typography>
    );
  }

  return (
    <>
      {/*...........................Carousel........................... */}

      <header>
        <div
          style={{
            width: "100%",
            height: "25vh",
            backgroundColor: "grey",
            position: "relative",
          }}>
          <Typography
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}>
            Carousel
          </Typography>
        </div>
      </header>

      {/*...........................Content........................... */}

      <main className={classes.main}>
        {/* NAME - MARK - CITY - COUNTRY */}

        <section className={classes.section}>
          <Typography
            component="p"
            align="center"
            variant="h5"
            style={{ fontWeight: "bold" }}>
            {data.name}
          </Typography>

          <div className={classes.firstContainer}>
            <div className={classes.flex}>
              <StarsIcon
                fontSize="small"
                color="error"
                style={{ marginRight: 4 }}
              />
              <Typography component="span">{data.mark}</Typography>
            </div>

            <Typography color="textSecondary" component="span">
              {data.city}, {data.country}
            </Typography>
          </div>
        </section>

        {/* CATEGORY - VEGAN - PRICE */}

        <section className={classes.secondSection}>
          <div>
            <Typography component="p">
              <RestaurantIcon fontSize="small" /> Restaurant {data.category}
            </Typography>
            {isVeganFriendly}
          </div>
          <Typography component="p" className={classes.flex}>
            <EuroICon style={{ fontSize: "1rem" }} />
            <Typography component="p">
              {data.minPrice}/ {data.maxPrice}
            </Typography>
          </Typography>
        </section>

        {/* MENU BUTTON */}

        <section className={classes.containerButton}>
          <Button className={classes.button}>Voir le menu</Button>
        </section>

        {/* DESCRIPTION*/}

        <section className={classes.section}>
          <Typography component="p" align="justify">
            {data.description}
          </Typography>
        </section>

        {/* MAP */}

        <section style={{ marginTop: 25 }}>
          <Typography component="p" variant="h5">
            Où se situe le restaurant
          </Typography>
          <Typography component="p">{data.address}</Typography>
          <img
            src={carte}
            alt="carte"
            style={{ marginTop: 8, width: "100%" }}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

Restaurant.propTypes = {};

export default Restaurant;
