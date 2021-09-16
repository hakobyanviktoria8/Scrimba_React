import React, {useState, useEffect} from "react";
// componentDidMount // componentDidUpdate // componentWillUnmount
import randomcolor from "randomcolor"


const One = () => {
    //distructure
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("Yes")
    const [color, setColor] = useState("")

    const increment = () => {
        setCount(count + 1);
        setAnswer("Yes")
    }
    const decrement = () => {
        setCount(count - 1);
        setAnswer("No")
    }
    useEffect(()=>{
        setColor(randomcolor())
    },[count])
    return (
        <div>
            <h1 style={{color:color}}>Here is value {count}</h1>
            <h1>{answer}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
};

export default One