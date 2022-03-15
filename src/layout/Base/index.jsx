import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../../components/Header'
import SwitchToggle from '../../components/SwitchToggle'
import { ThemeContext } from '../../context/themeContext'
import { lightMode, darkMode } from '../../styles/theme'

export default function BaseLayout({ children }) {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <Header />
      {children}
      <SwitchToggle />
    </ThemeProvider>
  )
}
