import { useState } from 'react';

const UseStateObject = () => {
  // const [name, setName] = useState('peter');
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState('read books');
  const [person, setPerson]  = useState({name:"peter",age:24, hobby:"read books"})

  const displayPerson = () =>{
    // setName('jhon')
    // setAge(28)
    // setHobby('screem at computer')
    setPerson({name:"jhon",age:28, hobby:"screem at computer"})
  }
  return (<>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>enjoy your : {person.hobby}</h3>
    <button className='btn' onClick={displayPerson}>show jhon</button>
  
  </>);
};

export default UseStateObject;
