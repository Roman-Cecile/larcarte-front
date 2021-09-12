import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: 16,
    paddingBottom: 16,
    borderBottom: "0.5px solid #b5b4b4",
  },

  main: {
    padding: 32,
  },

  textFieldEmail: {
    margin: "4px auto",
  },

  textFieldPW: {
    margin: "12px auto",
  },

  inputProps: {
    borderRadius: 7,
  },

  buttonLog: {
    background: "-webkit-linear-gradient(40deg,#ffd86f,#fc6262)",
    marginTop: 12,
    color: "#fff",
    fontWeight: "bold",
    borderRadius: 7,
  },

  section: {
    margin: "32px auto",
  },

  buttonFB: {
    margin: "16px auto",
  },
}));

export default useStyles;
