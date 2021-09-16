import React from "react";
import './App.css';
// import UserContext2Provider from "./UserContext2";
// import Intro from "./introduction/introduction";
// import Reusability from "./Reusability/Reusability";
// import Performance from "./Performance/Performance";
// import {ReduxComp} from "./Redux/Redux";
// import {Context} from "./Context/Context";
// import ContextProviderConsumer from "./ContextProviderConsumer";
// import UserContextProvider from "./UserContext";
// import ReactRouter from "./ReactRouter";
// import ReactContext from "./ReactContext/ReactContext";
// import ThemeContext from "./ReactContext/themeContext";
// import ReactRedux from "./ReactRedux/ReactRedux";
// import {increment, decrement} from "./ReactRedux/reduxInReact";

//2way to give state and action, with HOOKs
import {useSelector, useDispatch} from "react-redux"
import ReactHook from "./ReactHOOK";

function App(props) {
    const count = useSelector(state => state)
    // const favorite = useSelector(state => state)
    const dispatch = useDispatch();
    return (
        <div className="App">
            {/*<Intro/>*/}
            {/*<Reusability/>*/}
            {/*<Performance/>*/}
            {/*<Context/>*/}
            {/*<ContextProviderConsumer/>*/}
            {/*<UserContextProvider/>*/}
            {/*<UserContext2Provider/>*/}
            {/*<ReduxComp/>*/}

            {/*13/09/21*/}
            {/*<ReactRouter/>*/}

            {/*<ThemeContext.Provider value={"light"}>*/}
            {/*    <ReactContext/>*/}
            {/*</ThemeContext.Provider>*/}


            {/*<h1>{count}</h1>*/}
            {/*<button onClick={()=>dispatch(increment())}>+</button>*/}
            {/*<button onClick={()=>dispatch(decrement())}>-</button>*/}

            {/*<ReactRedux count = {count} />*/}

            <ReactHook/>
        </div>
    );
}

export default App


//1 way to give stata and dispatch action
//import connect then add 2 argument (mapStateToProps, mapDispatchToProps)
// import {connect} from "react-redux"
//
// function mapStateToProps(state) {
//     return {
//         count: state
//     }
// }
//
// const mapDispatchToProps = {
//     increment, decrement
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App)
