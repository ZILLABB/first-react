import React,{useState} from 'react'

const Counter = () => {
    const [num, setNum] = useState(0)

    let dan = () => {
        setNum(num + 1)
    }

    let pri = () => {
        setNum(num - 1)
    }

    let zero = () => {
        setNum(0)
    }

    return (
        <div>
            <h2 className='drip'>{num }</h2>
            <div className='dent'>
                <button onClick={pri}>decrease</button>
                <button onClick={zero}>reset</button>
                <button onClick={dan}>increase</button>
            </div>
        </div>
    )
}

export default Counter