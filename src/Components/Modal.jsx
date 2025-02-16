import React from 'react'
import useVisibility from '../useVisibility'

function Modal({hide, isVisible}) {
    if(!isVisible) return null;
  return (
    <div className="modal-overlay">
        <div className="modal">
            <h2>Modal title</h2>
            <p>This is a modal</p>
            <button onClick={hide}>Close</button>
        </div>
    </div>
  )
}

export default Modal