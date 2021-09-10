import React from "react";
import PropTypes from "prop-types";
import { Divider, Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

// MUI MEDIA QUERIES
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { capitalizeFirstLetter } from "../../utils/genericFunctions";

const datas = [
  {
    name: "le magnifique1",
    picture: "https://picsum.photos/id/1019/1000/600/",
  },
  {
    name: "le magnifique2",
    picture: "https://picsum.photos/id/1019/1000/600/",
  },
  {
    name: "le magnifique",
    picture: "https://picsum.photos/id/1019/1000/600/",
  },
];

const Favorite = (props) => {
  const mobile = useMediaQuery("(max-width:600px)");
  const tablet = useMediaQuery("(max-width:1025px)");
  return (
    <div style={{ margin: mobile ? 30 : "100px 60px" }}>
      <header>
        <Typography component="p" variant="h4">
          Favoris
        </Typography>
      </header>
      <Divider />
      <main style={{ marginTop: 30, display: mobile ? "" : "flex" }}>
        {datas.map((restaurant) => (
          <NavLink
            to={`/restaurant/${restaurant.name}`}
            style={{ textDecoration: "none", color: "#000" }}>
            <Grid
              container
              key={restaurant.name}
              justifyContent="space-between"
              style={{ marginBottom: 16 }}>
              <Grid item xs={3} sm={12} md={12}>
                <img
                  src={restaurant.picture}
                  alt="restaurant façade"
                  style={{
                    height: mobile ? 55 : 200,
                    width: mobile ? 60 : 200,
                    borderRadius: 5,
                  }}
                />
              </Grid>
              <Grid item xs={8} style={{ alignSelf: "center" }}>
                <Typography component="p" style={{ fontWeight: "bolder" }}>
                  {capitalizeFirstLetter(restaurant.name)}
                </Typography>
              </Grid>
            </Grid>
          </NavLink>
        ))}
      </main>
    </div>
  );
};

Favorite.propTypes = {};

export default Favorite;
