import GlobalStyles from '../styles/global'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
