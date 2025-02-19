import React from 'react'
import './ProgressBar.css'

function ProgressBar({text, width}) {
  return (
    <div className='ProgressBar'>
        <div className='ProgressHolder' 
            style={{width:`${width}%`}}>
            {text}
        </div>
    </div>
  )
}

export default ProgressBar
