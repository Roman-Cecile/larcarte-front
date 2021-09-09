import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  const section = {
    padding: "25px 16px ",
    borderBottom: "1px solid #e0dddd",
  };

  return {
    flex: {
      display: "flex",
    },

    main: {
      margin: 18,
      position: "relative",
    },

    section: {
      ...section,
    },

    firstContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 16,
    },

    secondSection: {
      ...section,
      display: "flex",
      justifyContent: "space-between",
    },

    containerButton: {
      position: "fixed",
      bottom: "10%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },

    button: {
      background: "-webkit-linear-gradient(90deg, #6F019C 0%, #C6017E 135.12%)",
      color: "#fff",
      fontWeight: "bold",
    },
  };
});

export default useStyles;
