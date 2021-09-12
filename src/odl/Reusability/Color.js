import React,{useState} from "react";

const Color = (props) => {
    const [color, setColor] = useState("");
    console.log(color);
    return (
        <div>
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
            <div style={{width:"100px", height:"100px", backgroundColor: color}}> hi</div>
        </div>
    )
};

export default Color
