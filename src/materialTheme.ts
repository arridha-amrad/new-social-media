import { createTheme } from "@mui/material/styles";
import purple from "@mui/material/colors/purple";

const theme = createTheme({
  palette: {
    primary: purple,
  },
  typography: {
    fontFamily: "Lato",
    button: {
      fontFamily: "Roboto",
      fontSmooth: "auto",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: "large",
      },
    },
    // Name of the component
    MuiButtonBase: {
      defaultProps: {},
    },
  },
});

export default theme;
