import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --red: #FF0000;
        --black: #000000;
        --white: #fff;
        --grey: #efefef;
        --yellow: #ffc600;
    }
    body {
        background: var(--black);
        color: var(--white);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
    }
    body, html { overflow-x:hidden; }
    a {
        color: var(--white);
        text-decoration: none;
    }

    ul {
    list-style: none;

    p, li {
    letter-spacing: 1px;

    h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }

    .gatsby-image-wrapper img[src*=base64\\,] {
        image-rendering: -moz-crisp-edges;
        image-rendering: pixelated;
    }

    /* Scrollbar Styles */
    body::-webkit-scrollbar {
        width: 12px;
    }
    
    html {
        scrollbar-width: thin;
        scrollbar-color: var(--red) var(--white);
    }
    body::-webkit-scrollbar-track {
        background: var(--white);
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--red) ;
        border-radius: 6px;
        border: 3px solid var(--white);
    }

    img {
        max-width: 100%;
    }

`;

export default GlobalStyles;
