import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  const container = {
    color: "white",
    position: "relative",
  };
  const padding = {
    padding: 20,
  };

  const button = {
    backgroundColor: "white",
  };
  return {
    containerMobile: {
      ...container,
    },

    containerDesktop: {
      ...container,
      paddingTop: "20%",
    },
    section: {
      ...padding,
    },
    header: {
      ...padding,
    },

    question: {
      fontWeight: "bolder",
    },

    listItem: {
      ...padding,
    },

    buttonNext: {
      ...button,
      position: "absolute",
      right: 0,
      backgroundColor: "#fec46c !important",
    },

    buttonPrev: {
      ...button,
      backgroundColor: "#fc7564 !important",
    },

    selected: {
      borderRadius: 8,
      background:
        "-webkit-linear-gradient(90deg, rgb(111 1 156 / 45%) 0%, rgb(198 1 126 / 31%) 135.12%)",
    },
  };
});

export default useStyles;
