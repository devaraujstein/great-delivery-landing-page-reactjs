import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: '#f9423a'
      },
      error: {
        main: "#ff6358",
      },
    },
    overrides: {
      MuiListItemIcon: {
        root: {
          minWidth: 0,
          marginRight: "0.5rem",
        },
      },
      MuiOutlinedInput: {
        input: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #1d3140 inset",
          },
        },
      },
    },
  })
);

export default theme;
