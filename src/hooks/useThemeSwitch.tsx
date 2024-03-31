import { useState } from 'react'

export const useThemeSwitch = (): [boolean, () => void] => {
  const [dark, setDark] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  )

  const root = window.document.documentElement
  if (dark) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }

  const toggleTheme = () => setDark(!dark)

  return [dark, toggleTheme]
}
