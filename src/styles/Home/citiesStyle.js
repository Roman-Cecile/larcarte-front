import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    marginBottom: 12,
  },

  containerCities: {
    display: "flex",
    justifyContent: "space-around",
  },

  cityPicture: {
    width: "100%",
  },

  cityName: {
    fontWeight: "bold",
  },
}));

export default useStyles;
