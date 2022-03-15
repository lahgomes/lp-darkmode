import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeStorage = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleDarkMode = () => {
    setIsChecked(!isChecked)
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeContext.Provider value={{ isChecked, isDarkMode, handleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
