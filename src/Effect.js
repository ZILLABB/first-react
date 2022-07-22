import React, { useEffect, useState } from 'react'

const Effect = () => {
    let [value,setValue]=useState(0)
    useEffect(() => {
        console.log('you clicked me ' + value + ' times');
    },[value])
    
  return (
      <div>
          <h2>{value}</h2>
          <button onClick={()=>{setValue(value + 1)}}>click to change Value</button>
    </div>
  )
}

export default Effect