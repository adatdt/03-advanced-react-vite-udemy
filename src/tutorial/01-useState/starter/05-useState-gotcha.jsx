import { useState } from "react";
const UseStateGotcha = () => {
  const[value, setValue] = useState(0)

  const handleClick = () =>{

    setTimeout(()=>{
      console.log('clicked the button');
      setValue((currentState)=>{
        const newState = currentState + 1;      
        return newState;
      })
    }, 3000)
    
    // setTimeout(()=>{
    //   console.log("click the bottom");
    //   setValue(value+1);
    // }, 300)

    // console.log(value)
  }
  return (<div>
      <h1>{value}</h1>
      <button onClick={handleClick} className="btn">increase</button>
  </div>);
};

export default UseStateGotcha;
