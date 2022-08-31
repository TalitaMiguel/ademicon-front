import { createTheme } from '@mui/material/styles';
import {primaryColor, neutralColor} from "../constants/colors"

const theme = createTheme({
  palette: {
    primary: {
      main:primaryColor,
      contrastText: "white"
    },
    secondary: {
      main: neutralColor,
      contrastText: "white"
    },
  },
});

export default theme