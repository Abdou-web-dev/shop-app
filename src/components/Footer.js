import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

export default function Footer() {
  const state = useContext(ThemeContext)

  const footer = {
    backgroundColor: state.theme.primary,
    color: state.theme.text,
    width: '100%',
    height: '200px',
  }

  return (
    <div style={footer}>
      This is a Footer
    </div>
  )
}
