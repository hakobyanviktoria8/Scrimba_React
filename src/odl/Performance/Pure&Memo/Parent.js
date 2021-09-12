import React from "react"
import Child from "./Child"

export default React.memo(function Parent(props) {
    console.log("[ ]   [0]   [ ]   [ ] rendered");
    return (
        <div>
            <p>-0--</p>
            <Child />
            {/*<Child />*/}
        </div>
    )
})