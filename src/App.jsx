import React from 'react'
import Home from './Home'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Contact from './Contact'
import './App.css'
import { Route,Routes,Link } from 'react-router-dom'
const App = () => {
  return (
    <div >
        <div className='EE'>
        <Link to='/'>Home</Link>
        <Link to='/AboutMe'>AboutMe</Link>
        <Link to='/Skills'>Skills</Link>
        <Link to='/Contact'> Contact</Link>
        </div>
     <div>
        <Routes>
          <Route path='/'element={<Home></Home>}></Route>
           <Route path='/AboutMe' element={<AboutMe></AboutMe>}></Route>
          <Route path='/Skills'element={<Skills></Skills>}></Route>
          <Route path='/Contact'element={<Contact></Contact>}></Route>
         
        </Routes>
      </div>
      </div>
  )
}

export default App
