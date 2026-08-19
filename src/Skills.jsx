import React from 'react'

const Skills = () => {
  return (
    <div >
      <div style={{textAlign:'center'}}>
        <h1>Skills</h1>
      </div>

        
        <div style={{display:'flex',gap:'30px',justifyContent:'center'}}>
      <div >
        <img style={{height:'100px',width:'100px'}} src="https://static.vecteezy.com/system/resources/previews/021/826/850/large_2x/api-icon-in-flat-style-software-integration-illustration-on-isolated-background-algorithm-programming-sign-business-concept-vector.jpg" alt="" />
        <b>API</b>
      </div>

      <div>
        <img  style={{height:'100px',width:'100px'}} src="https://img.freepik.com/premium-vector/server-security-protection-concept-illustration-server-device-with-shield-folder_156490-345.jpg" alt="" />
        <b>Database</b>      
      </div>
      </div><br></br><br></br>

      <div  style={{display:'flex',gap:'30px',justifyContent:'center'}}>
        <div>
            <img  style={{height:'100px',width:'100px'}} src="https://icones.pro/wp-content/uploads/2021/05/icone-html-rouge-300x300.png" alt="" />
        <b>HTML</b>
        </div>

        <div>
            <img  style={{height:'100px',   width:'100px'}} src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-2011.png" alt="" />
            <b>CSS</b>       
        </div>
      </div><br></br><br></br>

      <div  style={{display:'flex',gap:'30px',justifyContent:'center'}}>
        <div>
            <img style={{height:'100px',width:'100px'}} src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png" alt="" />
            <b>Javascript</b>
        </div>

        <div>
            <img style={{height:'100px',width:'100px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png" alt="" />
            <b>Python</b>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
