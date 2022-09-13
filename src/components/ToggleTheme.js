import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

function ToggleTheme() {

  const state = useContext(ThemeContext)

  const btn = {
    color: state.theme.textOnSecondary,
    marginTop: '20px',
    marginBottom: '20px',
    background: state.theme.secondary,
    // border: "none"
  }

  return (
    <button
      variant='contained'
      onClick={() => {
        state.setTheme(state.theme.type)
      }}
      style={btn}
    >
      Toggle Theme
    </button>
  )
}

export default ToggleTheme
