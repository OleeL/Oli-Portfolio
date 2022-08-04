// styles/global.js
import css from 'styled-jsx/css';

export interface IColorScheme {
    primary: string;
    primaryInverted: string;
    secondary: string;
    backgroundColor: string;
    color: string;
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

    html {
        scroll-behavior: unset !important;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(136, 136, 136, 1);
        border-radius: 100px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    body {
        width: 100%;
        font-size: calc(2.5vmin);
        color: #e5e5e5;
        background-color: black;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    section {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        font-size: 27px;
    }

    .section-content {
        display: flex;
        padding: 10px;
        border-radius: 10px;
    }

    p {
        padding: 70px;
        text-align: center;
        max-width: 80rem;
        font-size: 1.2rem;
    }
`;

export default GlobalStyles;
