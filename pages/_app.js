import '../styles/globals.css'
import { Provider } from 'react-redux';
import { useStore } from '../store'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#5a6fe9',
    grey_text: '#959595',
    border: '#e8eaef',
  },
}

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
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: 12px;
  }
  
`

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
    </>
  )
}

export default MyApp
