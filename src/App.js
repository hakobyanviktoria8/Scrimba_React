import React from "react";
import './App.css';
// import Intro from "./introduction/introduction";
// import Reusability from "./Reusability/Reusability";
import Performance from "./Performance/Performance";
import {ReduxComp} from "./Redux/Redux";
import {Context} from "./Context/Context";

function App() {
    return (
        <div className="App">
            {/*<Intro/>*/}
            {/*<Reusability/>*/}
            {/*<Performance/>*/}
            <Context/>

            {/*<ReduxComp/>*/}
        </div>
    );
}

export default App;
