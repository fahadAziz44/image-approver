import '../styles/globals.css'
import { Provider } from 'react-redux';
import { useStore } from '../store'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --color-text: #959595;
    --color-primary: #5a6fe9;
    --color-border: #f6f7fa;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
  .title {
    color: #959595;
    font-weight: bold;
  }
  
`

const theme = {
  colors: {
    primary: '#5a6fe9',
    grey_text: '#959595',
    border: '#e8eaef',
  },
}


function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
