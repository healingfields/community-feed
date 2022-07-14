import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';

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
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
