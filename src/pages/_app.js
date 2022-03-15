import GlobalStyles from '../styles/global'
import { globalTheme, lightMode } from '../styles/theme'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={globalTheme}>
        <ThemeProvider theme={lightMode}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
