import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  const input = {
    borderRadius: 20,
    border: 0,
    backgroundColor: "#fff",
    color: "#000",
    paddingLeft: 8,
    paddingTop: 2,
    height: 35,
  };

  const fakeInput = {
    width: 209,
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  };

  return {
    root: {
      display: "flex",
      justifyContent: "center",
      paddingTop: theme.spacing(8),
    },

    inputMobile: {
      ...input,
    },

    inputDesktop: {
      ...input,
      width: 500,
    },

    fakeInputMobile: {
      ...fakeInput,
    },

    fakeInputDesktop: {
      ...fakeInput,
      width: 500,
      fontSize: "1.2rem",
    },
  };
});

export default useStyles;
