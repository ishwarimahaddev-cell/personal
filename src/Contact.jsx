import React from 'react'

const Contact = () => {
  return (
    <div style={{textAlign:'center'}}>
      <div >
        <h1>Contact</h1>
      </div><br></br>


        <div style={{display:'flex' ,gap:'30px',marginLeft:'180px'}}>
      <div className='ID' >
        <b >⭐Email⭐</b>
        <div>Ishwarimahaddev@gmail.com</div>
      </div>

        <div className='ID' >
            <b>⭐linkdln⭐</b>
            <div>Ishwari Mahaddev</div>
        </div>      
        </div><br></br><br></br>

        <div className='ID' style={{marginLeft:'300px'}}>
            <b>⭐Github⭐</b>
            <div>Ishwaeimahaddev</div>
        </div>

    </div>
  )
}

export default Contact
