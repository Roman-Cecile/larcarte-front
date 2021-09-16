import React from "react";
import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

// HOOKS
import useResponsive from "../../utils/personalHooks/responsive";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 800,
    height: 300,
  },

  imageListRoot: {
    borderRadius: 30,
    overflow: "hidden",
  },
}));

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    cols: 2,
    style: {
      borderTopLeftRadius: 30,
    },
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    cols: 1,
    style: {
      borderTopRightRadius: 30,
    },
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    cols: 3,
    style: {
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
    },
  },
];

const Carousel = (props) => {
  const classes = useStyles();
  const isMobile = useResponsive();

  let carousel;

  if (isMobile) {
    carousel = (
      <ImageGallery
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets
        items={images}
      />
    );
  } else {
    carousel = (
      <ImageList
        classes={{ root: classes.imageListRoot }}
        rowHeight={200}
        className={classes.imageList}
        cols={3}>
        {images.map((item) => (
          <ImageListItem
            style={item.style}
            key={item.original}
            cols={item.cols || 1}>
            <img style={item.style} src={item.original} alt={item.original} />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }

  return (
    <div
      style={{ textAlign: "-webkit-center", paddingTop: isMobile ? 0 : 100 }}>
      {carousel}
    </div>
  );
};

Carousel.propTypes = {};

export default Carousel;
