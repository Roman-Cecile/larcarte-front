// MUI MEDIA QUERIES
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useResponsive = (props) => {
  const mobile = useMediaQuery("(max-width:600px)");
  //   const tablet = useMediaQuery("(max-width:2015px)");

  return mobile;
};

export default useResponsive;
