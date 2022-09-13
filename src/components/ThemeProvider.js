import { useState } from 'react'
import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Arrivals from "./Arrivals"
import ArrivalMen from "./pages/ArrivalMen.js"
import ArrivalWomen from "./pages/ArrivalWomen.js"
import MensWear from "./MensWear.js"
import Womenswear from "./Womenswear"
import Reviews from ".//Reviews"
import Story from "./Story.js"
import More from "./More.js"
import Navbar from './AppBar'
import Home from './Home.js'
import Orders from './pages/Orders'


//creating the context
export const ThemeContext = React.createContext({
  theme: {
    type: '',
    primary: '',
    text: ''
  },  //this is inizialisation of the context with an object that has 3 value pair elements
  setTheme: () => { }
})

export const ThemeContextProvider = (props) => {
  //declaring the theme 
  const theme = {
    light: {
      type: 'light',
      primary: 'lightgray',//blue
      text: 'black',
      textOnSecondary: "gray",
      secondary: "white",
      filter: "initial"


    },
    dark: {
      type: 'dark',
      primary: '#212121',//dark
      text: 'white',
      textOnSecondary: "white",
      secondary: "black",
      filter: "invert(1)"
    },
  }
  //changing the theme
  const setTheme = (type) => {
    setState({ ...state, theme: type === 'dark' ? theme.light : theme.dark })
  }

  const initState = {
    theme: theme.light,
    setTheme: setTheme
  }

  const [state, setState] = useState(initState)

  return (
    <ThemeContext.Provider value={state}>
      {/* {props.children} */}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/arrivals" element={<Arrivals />} />
          <Route exact path="/arrivals/arrival-men" element={<ArrivalMen />} />
          <Route exact path="/arrivals/arrival-women" element={<ArrivalWomen />} />
          <Route exact path="/menswear" element={<MensWear />} />
          <Route exact path="/womenswear" element={<Womenswear />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/story" element={<Story />} />
          <Route exact path="/more" element={<More />} />
          <Route exact path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  )
}
