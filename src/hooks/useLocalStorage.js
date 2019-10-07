import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // check for the item in localstorage
    const item = window.localStorage.getItem(key)
    // return stored item or the initial value
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = value => {
    // set the value to state
    setStoredValue(value)
    // save the value to local storage
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue]
}
