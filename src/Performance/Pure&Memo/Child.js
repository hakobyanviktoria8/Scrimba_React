import React,{memo} from "react"
import GrandChild from "./GrandChild"

function Child(props){
    console.log("[ ]   [ ]   [0]   [ ] rendered");
    return (
        <div>
            <p>--0-</p>
            <GrandChild />
            {/*<GrandChild />*/}
        </div>
    )
}

export default memo(Child)