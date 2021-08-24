import { FC } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    orange: {
      700: "rgb(255, 200, 148)",
      800: "rgb(245, 151, 63)",
      900: "rgb(240, 128, 23)",
    },
    gray: {
      100: "rgb(207, 207, 207)",
      200: "rgb(187, 187, 187)",
      300: "rgb(167, 167, 167)",
      400: "rgb(147, 147, 147)",
      500: "rgb(127, 127, 127)",
      600: "rgb(107, 107, 107)",
      700: "rgb(87, 87, 87)",
      800: "rgb(67, 67, 67)",
      900: "rgb(47, 47, 47)",
    },
    white: "rgb(255, 255, 255)",
  },
} as const;

interface ThemeProps {}

const Theme: FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
