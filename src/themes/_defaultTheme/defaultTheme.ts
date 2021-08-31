import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        main: string,
        sub: string,
        background: string,
        text: string;
        title: string;
        // STATUS
        danger: string,
        warning: string,
        success: string,

    }
  }
}

