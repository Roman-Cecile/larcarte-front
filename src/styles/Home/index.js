import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => {
  const matches = useMediaQuery("(max-width:600px)");

  return {
    containerForm: {
      backgroundImage: "url(./landing.webp)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: 488,
      position: "relative",
    },

    titleContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
    },

    titleButton: {
      marginTop: 16,
      background:
        "-webkit-linear-gradient(90deg, #6F019C 0%, #C6017E 135.12%) !important",
      color: "#fff",
      fontWeight: "bold",
    },

    mainContainer: {
      marginLeft: matches ? theme.spacing(50) : theme.spacing(2),
      marginRight: matches ? theme.spacing(50) : theme.spacing(2),
      marginBottom: theme.spacing(10),
    },

    citiesContainer: {
      marginTop: theme.spacing(2),
    },

    card: {
      backgroundColor: "#292929",
      color: "#fff",
      marginTop: theme.spacing(5),
      borderRadius: 20,
    },

    cardHeaderTitle: {
      fontWeight: "bolder",
    },

    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
  };
});

export default useStyles;
