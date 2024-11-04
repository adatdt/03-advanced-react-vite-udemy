import { useState, useEffect} from "react";
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [value, setValue] = useState('users');
  useEffect(()=>{
      console.log("hello there")
  },[value])
  return <h2>fetch data example</h2>;
};
export default FetchData;
