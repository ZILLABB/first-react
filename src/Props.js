import React from 'react'

const props = (props) => {
    const bl = props.blogs
    const bc = props.handle 
    const bd=props.dan
    return (
      <div>
          <div className='main'>
              {bl.map((datum) => {
                  const { autor, company, services, id, img } = datum
                  return (
                      <div className='mains' key={id}>
                          <h2>{autor}</h2>
                          <h2>{company}</h2>
                          <h2>{services}</h2>
                          <img src={img} alt="" />
                          <button onClick={() => { bc(id) }}>remove</button>
                      </div>
                  )
              }
              )}
              <button onClick={() => { bd([]) }}> delete all</button>
          </div>
    </div>
  )
}

export default props