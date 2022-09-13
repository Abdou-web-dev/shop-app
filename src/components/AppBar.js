import { useContext } from 'react'
import * as React from 'react'
import { Link } from "react-router-dom";
import { ThemeContext } from './ThemeProvider';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ToggleButton from '@mui/material/ToggleButton';
import { IconButton, Tooltip } from '@mui/material';
import Logo from "./logos/Logo"
import './styles.scss'


const AppBar = () => {

  const state = useContext(ThemeContext)

  const appBar = {
    marginTop: 10,
    backgroundColor: state.theme.primary,
    width: '100%',
    height: '60px',
  }
  const liStyles = {
    color: state.theme.text
  }
  const iconStyles = {
    color: state.theme.text //hahaha and it worked
  }

  return (
    <nav className="navbar">

      <ul style={appBar} className='inner'>

        <Link to='/' style={{ textDecoration: "none" }}>
          <IconButton disableRipple className='logo' aria-label="logo" >
            <Logo />
          </IconButton>
        </Link>

        <Link to='/arrivals' style={{ textDecoration: "none" }}>
          <li style={liStyles}>
            <span>NEW  ARRIVALS</span>
          </li>
        </Link>
        <Link to="menswear" style={{ textDecoration: "none" }}>
          <li style={liStyles}><span>MEN'S</span></li>
        </Link>
        <Link to="womenswear" style={{ textDecoration: "none" }}>
          <li style={liStyles}><span>WOMEN'S</span></li>
        </Link>
        <Link to="reviews" style={{ textDecoration: "none" }}>
          <li style={liStyles}><span>REVIEWS</span></li>
        </Link>
        <Link to="/story" style={{ textDecoration: "none" }}>
          <li style={liStyles}><span>THE GREAT STORY</span></li>
        </Link>
        <Link to="/more" style={{ textDecoration: "none" }}>
          <li style={liStyles}><span>MORE</span></li>
        </Link>

        {/* the btn that changes the theme of the app */}
        <ToggleButton value="" onClick={() => { state.setTheme(state.theme.type) }}>
          {/* {state.theme.type === "light" ? <DarkModeIcon style={iconStyles} /> : <DarkModeIcon style={iconStyles} />} */}
          {state.theme.type === "light" ?
            <Tooltip title={state.theme.type === "light" ? "Enable Dark mode" : ""}>
              <Brightness4Icon style={iconStyles} />
            </Tooltip>
            :
            <Tooltip title={state.theme.type === "dark" ? "Disable Dark mode" : ""}>
              <Brightness4Icon style={iconStyles} />
            </Tooltip>
          }
        </ToggleButton>
      </ul >
    </nav >
  )
}

export default AppBar;
