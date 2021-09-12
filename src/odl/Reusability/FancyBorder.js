import React from "react"

const FancyBorder = (props) => {
    return (
        <div style={{border: "3px solid blue", margin: "30px", padding:"30px"}}>
            {/*call props children*/}
            {props.children}
        </div>
    )
};
export default FancyBorder