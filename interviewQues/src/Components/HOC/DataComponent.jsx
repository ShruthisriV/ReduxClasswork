import React from 'react'

function DataComponent(props) {
  return (
    <div>
        <h1>Data Loaded</h1>
        <p>{props.data}</p>
    </div>
  )
}

export default DataComponent