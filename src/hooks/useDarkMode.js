import { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
  // save darkmode to local storage
  const [darkValue, setDarkValue] = useLocalStorage('dark')

  useEffect(() => {
    darkValue
      ? document.querySelector(body).classList.add('dark-mode')
      : document.querySelector(body).classList.remove('dark-mode')
  }, [darkValue])

  // return the destructured array
  return [darkValue, setDarkValue]
}
