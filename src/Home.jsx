import React from 'react'
import'./App.css'
import logo from './ishu..JPG'
const Home = () => {
  return (
    <div style={{padding:'20px'}}>
      <div className='CC'>
      <div>Hi there✋🏻</div>
      <b>I am ishwari mahaddev      </b>
      <h2>frontend Developer</h2>
      </div>

      <img className='BB' style={{height:'200px',width:'200px' ,padding:'20px'}} src={logo} alt="" />
    </div>
  )
}

export default Home
