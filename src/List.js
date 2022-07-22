import React, { useState } from 'react'
import { myData } from './dataBase'
import Props from './Props'




const List = () => {
    const [data, setData] = useState(myData)

    function handleRemove(id) {
        let newData = data.filter((dt) => dt.id !== id)
        setData(newData)
    }
    return (
        <div>
            <div className='main'>
                <Props blogs={data } handle={handleRemove} dan={setData} />
                {data.map((datum) => {
                    const { autor, company, services, id ,img} = datum
                    return (
                        <div className='mains' key={id}>
                            <h2>{autor}</h2>
                            <h2>{company}</h2>
                            <h2>{services}</h2>
                            <img src={img} alt="" />
                            <button onClick={() => { handleRemove(id) }}>remove</button>
                        </div>
                    )
                }
                )}
                <button onClick={() => { setData([]) }}> delete all</button>
            </div>
        </div>
    )
}

export default List