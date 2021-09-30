import React, {useEffect, useState} from "react";
import "./GameWordCount.css"

const GameWordCount = () => {
    const [bool, setbool] = useState(false)
    const [text, setText] = useState("")
    const [dedline, setDedline] = useState(15)
    const [intervalID, setintervalID] = useState(0)

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        const interval = setInterval(() => {
            setDedline(dl => dl - 1)
        }, 1000)

        setintervalID(interval)
    }

    useEffect(() => {
        console.log("dedline = ", dedline)
        if (dedline < 1) {
            clearInterval(intervalID)
            setbool(true)
        }
    }, [dedline])

    return (
        <div className="GameWordCount">
            <h1>How fast do you type?</h1>
            <textarea disabled={bool} value={text} onChange={handleChangeText} name="" id="" cols="30" rows="10"/>
            <h4>Time remaining: {dedline}</h4>
            <hr/>
            <button onClick={handleClick}>PLAY</button>
            <p>Word count: {text === "" ? 0 : text.trim().split(" ").length}</p>
        </div>
    )
};

export default GameWordCount