import React from 'react'

function About() {
  return (
    <React.Fragment>
      <div style={aboutStyle}>
        <h1 style={{padding: '10px'}}>About</h1>
        <p><b>Todo list using React.</b></p>
      </div>
    </React.Fragment>
  )
}

const aboutStyle = {
  padding: '10px',
  margin: '10px'
}

export default About;