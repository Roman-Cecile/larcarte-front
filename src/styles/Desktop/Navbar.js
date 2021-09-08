import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "transparent",
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
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
  },

  title: {
    fontWeight: "bolder",
    fontSize: "2rem",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

export default useStyles;
