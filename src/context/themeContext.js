import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeStorage = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const preferences = localStorage.getItem('isDarkMode')
    console.log('storage: ', preferences)

    if (preferences !== null) {
      setIsDarkMode(preferences)
    }
  }, [])

  useEffect(() => {
    console.log('state: ', isDarkMode)
  }, [isDarkMode])

  const handleDarkMode = () => {
    setIsChecked(!isChecked)
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('isDarkMode', !isDarkMode)
  }

  return (
    <ThemeContext.Provider value={{ isChecked, isDarkMode, handleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
