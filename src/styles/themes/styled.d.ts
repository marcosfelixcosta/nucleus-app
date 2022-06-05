import 'styled-components';

declare module 'styled-components' {
export interface DefaultTheme {


  colors: {
    primary: string;
    secondary: string;
    terty:string;

    white:string;
    black:string;
    gray:string;

    success: string;
    info: string;
    warning:string;

  },

};
}