import { createTheme } from "@mui/material/styles";
import purple from "@mui/material/colors/purple";
import red from "@mui/material/colors/red";

const theme = createTheme({
  palette: {
    primary: purple,
    error: red,
  },
  typography: {
    fontFamily: "Roboto",
    caption: {
      fontSize: ".8rem",
    },
    button: {
      fontFamily: "Roboto",
      fontSmooth: "auto",
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: "medium",
      },
    },
    // Name of the component
    MuiButtonBase: {
      defaultProps: {},
    },
  },
});

export default theme;
