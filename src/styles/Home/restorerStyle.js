import { makeStyles } from "@material-ui/core/styles";
import restorer from "../../images/restorer.webp";

const useStyles = makeStyles((theme) => {
  const card = {
    borderRadius: 20,

    color: "#fff",
    marginTop: theme.spacing(5),
  };
  return {
    card: {
      ...card,
      backgroundColor: "#292929",
    },

    cardHeaderTitle: {
      fontWeight: "bolder",
    },

    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },

    cardMobile: {
      ...card,

      display: "flex",
      backgroundImage: `url(${restorer})`,
      backgroundSize: "cover",
      backgroundPositionY: "38%",
      backgroundPositionX: "100%",
      backgroundRepeat: "no-repeat",
      height: 200,
    },
    details: {
      display: "flex",
      flexDirection: "column",
      width: "50%",
      color: "#fff",
    },

    content: {
      background: "linear-gradient(to right, #292929, transparent)",
      height: "100%",
    },

    cover: {
      width: "50%",
      height: 200,
    },

    image: {
      backgroundSize: "cover",
    },

    button: {
      background: "-webkit-linear-gradient(40deg,#ffd86f,#fc6262)",
      marginTop: 12,
      color: "#fff",
      fontWeight: "bold",
      borderRadius: 7,
    },
  };
});

export default useStyles;
