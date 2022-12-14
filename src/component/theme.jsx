import { createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { deepOrange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: purple,
  },
});

export default theme;
