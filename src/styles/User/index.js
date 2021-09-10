import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
    },

    main: {
      textAlign: "center",
      marginTop: theme.spacing(7),
    },
    form: {
      margin: theme.spacing(2),
    },

    button: {
      marginTop: theme.spacing(1),
    },
  };
});

export default useStyles;
