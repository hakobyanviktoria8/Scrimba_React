import React, {useEffect, useState} from "react";
import randomcolor from "randomcolor"

const UseEfectComp = () => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        setColor(randomcolor())
    }, [count])

    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
        </div>
    )
};

export default UseEfectComp