import React,{memo}  from "react"

export default memo(function GrandChild (props) {
    console.log("[ ]   [ ]   [ ]   [0] rendered");
    return (
        <div>
            <p>---0</p>
        </div>
    )
})