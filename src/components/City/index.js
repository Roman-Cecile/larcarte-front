import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

// Carousel
import ImageGallery from "react-image-gallery";

import { useHistory } from "react-router-dom";
import useResponsive from "../../utils/personalHooks/responsive";

const data = [
  {
    name: "Le magnifique",
    mark: 432,
    minPrice: 10,
    maxPrice: 22,
    vegan: true,
    pictures: [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
      },
    ],
    category: "français",
  },
  {
    name: "Le magnifique",
    mark: 432,
    minPrice: 10,
    maxPrice: 22,
    vegan: true,
    pictures: [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
      },
    ],
    category: "fast-food",
  },
  {
    name: "Le magnifique",
    mark: 432,
    minPrice: 10,
    maxPrice: 22,
    vegan: true,
    pictures: [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
      },
    ],
    category: "italien",
  },
];

const City = (props) => {
  window.scrollTo(0, 0);
  const isMobile = useResponsive();
  // Overide carousel style
  const getElement = document.getElementsByClassName("image-gallery-slides");
  Object.keys(getElement).map(
    (element) => (getElement[element].style["border-radius"] = "10px")
  );
  Object.keys(getElement).map(
    (element) => (getElement[element].style.border = "solid 1px #b3b3b3")
  );

  const history = useHistory();
  return (
    <div>
      <header
        style={{
          paddingBottom: 25,
          borderBottom: "solid 1px #d6d6d6",
          marginTop: 80,
        }}>
        <Typography
          style={{ marginTop: 16 }}
          align="center"
          component="p"
          variant="h5">
          {props.match.params.city.toUpperCase()}
        </Typography>
        <section style={{ marginTop: 32 }}>
          <Typography component="p" align="center">
            Découvrez plus de 200 restaurants
          </Typography>
        </section>
      </header>

      <main style={{ margin: 30 }}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}>
          {data.map((restaurant) => (
            <div
              onClick={() => history.push(`/restaurant/${restaurant.name}`)}
              key={restaurant.name}
              style={{
                margin: isMobile ? "16px 8px" : 16,
                maxWidth: isMobile ? null : 300,
                paddingBottom: 8,
                borderRadius: 10,
              }}>
              <ImageGallery
                showFullscreenButton={false}
                showPlayButton={false}
                showThumbnails={false}
                items={restaurant.pictures}
                description={restaurant.name}
                originalClass={"border: 10px"}
                showNav={false}
                showBullets
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 4px",
                }}>
                <div>
                  <Typography component="p" variant="h6">
                    {restaurant.name}
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    color="textSecondary">
                    {restaurant.category}
                  </Typography>
                </div>
                <Typography component="p" variant="caption">
                  Prix: {restaurant.minPrice}-{restaurant.maxPrice}€{" "}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

City.propTypes = {};

export default City;
