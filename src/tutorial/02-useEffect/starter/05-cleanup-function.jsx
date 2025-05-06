import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const[toggle,setToggle]  = useState(false)
  console.log('render')
  return (<div>
    <button className='btn' onClick={()=>setToggle(!toggle)}>Togle Component</button>
    {toggle &&<RandomComponent />}
  </div>);
};

const RandomComponent =()=>{
  useEffect(()=>{
    // console.log('hmmm, this is interesting')
    // const intID = setInterval(()=>{
    //   // console.log("hello from interval")
    // },1000)

    // return ()=> {
    //   clearInterval(intID)
    //   console.log('clean up')
    // }

    const someFunc = ()=>{

    }
    window.addEventListener('scroll', someFunc)
    return ()=>window.removeEventListener('scroll', someFunc)
  },[])
  return <h1>Hello there</h1>
}

export default CleanupFunction;
