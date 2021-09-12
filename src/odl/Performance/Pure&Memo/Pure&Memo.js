import React, {useState} from "react";
import GrandParent from "./GrandParent";

function PureMemo(props) {
    const [count, setCount] = useState(0);

    console.log("[GP] [P] [C] [GC] APP just rendered");


    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Add</button>
            {/*when we use count in GrandParent then sould component update here*/}
            <GrandParent count = {count}/>
            {/*<GrandParent/>*/}
        </div>
    )
}

export default PureMemo