import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
  // save darkmode to local storage
  const [darkMode, setDarkMode] = useLocalStorage('dark', false)

  // if darkmode is truthy, add the class dark-mode
  // else remove the class dark-mode from the body
  useEffect(() => {
    darkMode
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode')
  }, [darkMode])

  const handleToggle = () => {
    setDarkMode(!darkMode)
  }

  // return the destructured array
  return [darkMode, setDarkMode, handleToggle]
}
