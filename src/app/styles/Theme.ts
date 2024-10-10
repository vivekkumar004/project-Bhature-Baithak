import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface PaletteOptions {
    border?: {
      type1: string;
      type2: string;
    };
  }
  interface Palette {
    border?: {
      type1: string;
      type2: string;
    };
  }
  interface TypeBackground {
    econsentBg?: string;
    lightBg?: string;
  }
  interface TypeText {
    lightText?: string;
    tertiary?: string;
    link?: string;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    body1: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "150%",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "150%",
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "150%",
    },
    h1: { fontWeight: 700, fontSize: 33, lineHeight: "150%" },
    h2: {
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "150%",
    },
    h3: {
      fontWeight: 700,
      fontSize: 22,
      lineHeight: "150%",
    },
    h4: {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: "150%",
    },
    button: {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "150%",
    },
  },
  palette: {
    primary: {
      main: "#262626",
    },
    text: {
      primary: "#212121",
      secondary: "#1F2A37",
      tertiary: "#111928",
      link: "#1C64F2",
      lightText: "#6B7280",
    },
    background: {
      econsentBg: "#262626",
      lightBg: "#FAFAFA",
    },
    border: {
      type1: "#DCDCE0",
      type2: "#E5E7EB",
    },
    divider: "rgba(0,0,0,0.1)",
  },
});