import React from 'react'

const Dynamic = () => {
    let gender = 'male'
    let age = 20
    let friends = ['daddy', 'freeze', 'daniel']
    let link ='www.facebook.com'
    return (
        <div>
            <h1>My first Page</h1>
            <h2>{gender}</h2>
            <h4>{age}</h4>
            <h4>{friends}</h4>
            <a href={link}>Facebook</a>
        </div>
    )
}

export default Dynamic