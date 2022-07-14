import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
