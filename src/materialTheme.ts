import { createTheme } from "@mui/material/styles";
import purple from "@mui/material/colors/purple";

const theme = createTheme({
  palette: {
    primary: purple,
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
