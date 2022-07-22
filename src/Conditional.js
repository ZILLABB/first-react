import React, { useState } from 'react'

const Conditional = () => {
    const [state, setState] = useState(false)
    // let show = state || 'MERN';
    // let hide = state && 'MERN';
    // console.log(show);
    // console.log(hide);
    return (
        <div>
            <div>
                <label htmlFor="email"><input type="text" />Email</label><br />
                <label htmlFor="Password">Password<input type="password" name="" id="password" /></label>

            </div>
            {state && <MoreDetails />}
            <button onClick={()=>{setState(!state)}}>Show / Hide</button>
        </div>
    )
}

let MoreDetails = () => {
    return (
        <div>
            <div>

                <label htmlFor="email"><input type="text" />Email</label><br />
                <label htmlFor="Password">Password<input type="password" name="" id="password" /></label>

            </div>
            {/* <button>Show / Hide</button> */}
        </div>
        
    )
}

export default Conditional