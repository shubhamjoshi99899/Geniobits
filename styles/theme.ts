import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      white: string;
      background: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      white?: string;
      background?: string;
    };
  }
}
// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      "DM Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  custom: {
    white: "#ffffff",
    background: "#fcfcfc",
  },
  palette: {
    primary: {
      main: "#0868A4",
      light: "#F0F7FF ",
      dark: "#023453",
    },
    secondary: {
      main: "#D7EFFF",
      light: "#F9FBFD",
    },
    error: {
      main: "#CD4343",
      light: "#DB5252",
      dark: "#A64A4A",
    },
    success: {
      main: "#1EA408",
      light: "#52DBB2",
    },
    warning: {
      main: "#D4A90D",
    },
    text: {
      primary: "#000000",
      secondary: "#444444",
    },
    grey: {
      50: "#999999",
      100: "#949494",
      600: "#616161",
    },
  },
});

export default theme;