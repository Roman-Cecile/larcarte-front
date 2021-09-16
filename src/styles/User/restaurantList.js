import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  const paper = {
    position: "absolute",
    minWidth: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
  };
  return {
    paper: {
      ...paper,
      left: "50%",
      transform: `translate(-50%, -50%)`,
    },
  };
});

export default useStyles;
