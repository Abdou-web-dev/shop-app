import { useContext } from 'react'
import * as React from 'react'
import { ThemeContext } from '../ThemeProvider'
import logo from '../../assets/images/logo.png'
import "./styles.scss"

export default function Logo() {

    const state = useContext(ThemeContext)

    const logoStyles = {
        backgroundColor: state.theme.primary,
        color: state.theme.text,
        filter: state.theme.filter

    }

    return (
        <div className="logo-container">
            <img style={logoStyles} src={logo} alt="" />
        </div>
    )
}
