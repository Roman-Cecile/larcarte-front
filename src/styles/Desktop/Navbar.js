import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#0b4c5d",
  },

  grow: {
    flexGrow: 1,
  },

  iconLogin: {
    color: "#fff",
  },

  container: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
  },

  title: {
    fontWeight: "bolder",
    fontSize: "2rem",
    color: "#fff",
  },
}));

export default useStyles;
