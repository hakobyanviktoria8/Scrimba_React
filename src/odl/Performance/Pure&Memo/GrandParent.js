import React from "react"
import Parent from "./Parent"

function GrandParent (props) {
    console.log("[0]   [ ]   [ ]   [ ] rendered");
    return (
        <div>
            <p>0---</p>
            <Parent />
            {/*<Parent />*/}
        </div>
    )
}

//React.memo replace sould Component update
export default React.memo(GrandParent)