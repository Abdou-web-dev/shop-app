import * as React from 'react'
import { ThemeContextProvider } from './components/ThemeProvider'
import Navbar from './components/AppBar'
// import Footer from './components/Footer'
import ToggleTheme from './components/ToggleTheme'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Arrivals from "./components/Arrivals"
import MensWear from "./components/MensWear.js"
import Womenswear from "./components/Womenswear"
import Reviews from "./components/Reviews"
import Story from "./components/Story.js"
import More from "./components/More.js"


function App() {

  return (
    <div>
      <ThemeContextProvider>
      </ThemeContextProvider>
    </div>
  )
}
export default App;

{/* <Router>
        <Navbar />
        <Routes>
          <Route exact path="/arrivals" element={<Arrivals />} />
          <Route exact path="/menswear" element={<MensWear />} />
          <Route exact path="/womenswear" element={<Womenswear />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/story" element={<Story />} />
          <Route exact path="/more" element={<More />} />
        </Routes> */}
{/* how can I use ThemeContextProvider inside Router ?? */ }

{/* Uncaught Error: [ThemeContextProvider] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment></React.Fragment> */ }
{/* </Router> */ }


{/* <Router>
<Layout>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
</Layout>
</Router> */}