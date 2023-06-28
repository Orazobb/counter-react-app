import {useState} from 'react';

function Counter(){
  const [count, setCount] = useState(0);

  const reset =() => setCount(0);
  // her ikisi de olur
  return(
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count-1)}>-</button>
    <button onClick={reset}>Reset</button>
    <button onClick={() => setCount(count+1)}>+</button>
    </>
  )
};

export default Counter;