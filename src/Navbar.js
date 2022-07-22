import React from 'react'

const Navbar = () => {
    
    let gender = 'male'
    let name='Bayo'
  let random = Math.ceil(Math.random() * 10)
  let brain='empty'
  return (
      <div>
        <h2>{random}</h2>
      <h2>{gender}</h2>
      <h1>{brain}</h1>
      </div>
      

  )
}

export default Navbar