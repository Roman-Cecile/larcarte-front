import React from "react";
import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
// MUI MEDIA QUERIES
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 800,
    height: 300,
  },
}));

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    cols: 2,
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    cols: 1,
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    cols: 3,
  },
];

const Carousel = (props) => {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:600px)");

  let carousel;

  if (mobile) {
    carousel = (
      <ImageGallery
        showFullscreenButton={false}
        showPlayButton={false}
        items={images}
      />
    );
  } else {
    carousel = (
      <ImageList rowHeight={200} className={classes.imageList} cols={3}>
        {images.map((item) => (
          <ImageListItem key={item.original} cols={item.cols || 1}>
            <img src={item.original} alt={item.original} />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }

  return (
    <div style={{ textAlign: "-webkit-center", paddingTop: mobile ? 0 : 100 }}>
      {carousel}
    </div>
  );
};

Carousel.propTypes = {};

export default Carousel;
