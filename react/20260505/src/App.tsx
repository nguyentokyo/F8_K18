import {useState, useCallback} from "react";
import './App.css'

function App() {
    const [count, setCount] = useState(0);

    const logging = useCallback(
        () => {
            console.log('count', count)
        },[]
    )

    const onClick = () => {
        setCount(count + 1);
        logging()
    }

  return (
    <>
        <h1>{count}</h1>
        <button onClick={onClick}>click me</button>
        <button onClick={onClick}>Open customer</button>
        <button onClick={onClick}>Open product</button>
    </>
  )
}

export default App
