import React, {useState} from 'react';
// import { useState } from 'react';

const Clickevent = () => {
    const [num,setNum] = useState(100)
    const [name, setName] = useState('Yinka')
    const [person, setPerson] = useState({
        name:'Olive',
        age:40,
        message:'Hi Guys'
    })

    function changePerson(){
        setPerson({...person,age:90, name:'Jerry', message:'all the single ladies'})
    }
    
    // console.log(useState());
    function changeName(){
        if(name === 'Yinka'){
            setName('Eggy')
        }else{
            setName('Yinka')
        }
    }
    let age = 100
    let changeAge = ()=>{
        //   age = 40
        setNum(40)

        console.log(age)
    }
    let ClickAm = ()=>{
        console.log('Na u click am o!');
    }

    function Anotherbanger (statement, place){
        console.log(statement + 'help me,dem dey carry me go' + place);
    }
  return (
    <div>
      <button onClick={ClickAm}>
        click am
      </button>
      <button onClick={function(){Anotherbanger('help me ', ' Nigeria')}}>
        click am again
      </button>
      <p>  {num}</p>
      <button onClick={changeAge}>click to change age</button>
      <p> {name} </p>
      <button onClick={changeName}>click to change name</button>
      <h2> {person.age} </h2>
      <h2> {person.name} </h2>
      <h2> {person.message} </h2>
      <button onClick={changePerson}>click to change </button>
    </div>
  )
}

export default Clickevent