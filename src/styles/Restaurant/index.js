import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  const section = {
    padding: "25px 16px ",
    borderBottom: "1px solid #e0dddd",
  };

  const main = {
    position: "relative",
  };

  const map = {
    marginTop: 8,
  };

  const icon = {
    position: "absolute",
    top: 20,
  };

  return {
    flex: {
      display: "flex",
    },

    mainMobile: {
      ...main,
      margin: 18,
    },

    mainDesktop: {
      margin: "18px 500px",
      ...main,
    },

    mainTablet: {
      margin: "18px 100px",
      ...main,
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
      zIndex: 1,
    },

    button: {
      background: "-webkit-linear-gradient(90deg, #6F019C 0%, #C6017E 135.12%)",
      color: "#fff",
      fontWeight: "bold",
    },

    containerMapMobile: {
      ...map,
      width: "100%",
    },

    containerMapDesktop: {
      ...map,
      width: 300,
    },

    map: {
      height: 400,
      with: "100%",
    },

    gobackIcon: {
      ...icon,
      left: 20,
      backgroundColor: "#fff",
      color: "#000",
    },

    favoriteIcon: {
      ...icon,
      right: 20,
      backgroundColor: "transparent",
      zIndex: 1,
    },
  };
});

export default useStyles;
