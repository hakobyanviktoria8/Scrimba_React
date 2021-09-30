import React, {useState, useEffect, useRef} from "react"
import "./GameWordCount.css";

function App() {
    const STARTING_TIME = 5
    const refer= useRef(null)
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(5)
        setText("")
        refer.current.disabled = false
        refer.current.focus()
    }

    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            setIsTimeRunning(false)
            setWordCount(calculateWordCount(text))
        }
    }, [timeRemaining, isTimeRunning])

    return (
        <div className="GameWordCount">
            <h1>How fast do you type?</h1>
            <textarea
                disabled={!isTimeRunning}
                onChange={handleChange}
                value={text}
                ref={refer}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={startGame} disabled={isTimeRunning}>Start</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App
