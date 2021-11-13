// styles/global.js
import css from 'styled-jsx/css'

export interface IColorScheme {
    primary: string,
    primaryInverted: string,
    secondary: string,
    backgroundColor: string,
    color: string
}

export const GlobalStyles = css.global`

    @font-face {
        font-family: 'RobotoMono';
        src: url('/fonts/RobotoMono.ttf') format('truetype');
    }

    @font-face {
        font-family: 'RobotoMono';
        src: url('/fonts/RobotoMono-Italic.ttf') format('truetype');
        font-style: italic;
    }

    body {
        font-size: calc(2.5vmin);
        color: #E5E5E5;
        background-color: #282c34;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

`


export default GlobalStyles;