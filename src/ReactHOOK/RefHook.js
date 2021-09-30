import React, {useState, useRef} from "react";

const RefHook = () => {
    const [data, setData] = useState({fname: "", lname: ""})
    const [fullName, setFullName] = useState([])
    const inputRef = useRef(null);

    const handleChange = (e) => {
        const {name, value} = e.target
        setData(val => ({...val, [name]: value}))
    }

    const handleClick = (e) => {
        e.preventDefault();
        setFullName(stat => [...stat, data])
        inputRef.current.focus()
        console.log(inputRef.current);
    }

    return (
        <form onSubmit={handleClick}>
            <input type="text" name="fname" value={data.fname} onChange={handleChange}/>
            <input ref={inputRef} type="text" name="lname" value={data.lname} onChange={handleChange}/>
            <button>Click</button>
            {fullName.map((x, i) => <p key={i}>{x.fname + " " + x.lname}</p>)}
        </form>
    )
};

export default RefHook