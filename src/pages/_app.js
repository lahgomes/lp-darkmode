import { ThemeProvider } from 'styled-components'
import { ThemeStorage } from '../context/themeContext'
import GlobalStyles from '../styles/global'
import { globalTheme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeStorage>
        <GlobalStyles />
        <ThemeProvider theme={globalTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeStorage>
    </>
  )
}

export default MyApp
