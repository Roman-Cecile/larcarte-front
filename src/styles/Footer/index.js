import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#F7F7F7",
    marginBottom: 56,
    height: 100,
    textAlign: "center",
    color: "#000",
    position: "relative",
    zIndex: -1,
    borderTop: "1px solid #DDDDDD",
  },

  list: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

export default useStyles;
