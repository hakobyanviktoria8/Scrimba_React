import React from "react";
import './App.css';
import UserContext2Provider from "./UserContext2";
// import Intro from "./introduction/introduction";
// import Reusability from "./Reusability/Reusability";
// import Performance from "./Performance/Performance";
// import {ReduxComp} from "./Redux/Redux";
// import {Context} from "./Context/Context";
// import ContextProviderConsumer from "./ContextProviderConsumer";
import UserContextProvider from "./UserContext";


function App() {
    return (
        <div className="App">
            {/*<Intro/>*/}
            {/*<Reusability/>*/}
            {/*<Performance/>*/}
            {/*<Context/>*/}
            {/*<ContextProviderConsumer/>*/}
            <UserContextProvider/>
            <UserContext2Provider/>
            {/*<ReduxComp/>*/}
        </div>
    );
}

export default App;
