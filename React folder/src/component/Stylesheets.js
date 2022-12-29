import React from 'react'
import './myStyles.css'

function Stylesheets(props) {
    let className= props.primary ? 'primary' : 'secondary'
  return (
      <div>
          <h1 className={`${className} font_xl position`  }>Stylesheets</h1>
    </div>
  )
}

export default Stylesheets