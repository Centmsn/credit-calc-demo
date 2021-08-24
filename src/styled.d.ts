import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      gray: {
        [key: string]: string;
      };
      orange: {
        [key: string]: string;
      };
      white: string;
    };
  }
}
