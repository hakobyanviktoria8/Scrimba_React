import React from "react";
// import index from "./index";
// import index1 from "./index1";
// import index2 from "./index2";
// import dinamikChangeState from "./dinamikChangeState";
// import moreGlobalState from "./moreGlobalVarible";
// import even from "./evenMoreComplexState"
// import plain from "./plainJsRedux/plainJsRedux";
import reduxinreact from "./reduxInReact"
// import {connect} from "react-redux"


const ReactRedux = ({count}) => {
    return (
        <div>
            <hr/>
            <h1>React Redux Successful understand</h1>
            <p>{count}</p>

        </div>
    )
};

// function mapStateToProps(globalstate) {
//     return {
//         count: globalstate
//     }
// }
//
// export default connect(mapStateToProps, {})(ReactRedux)

export default ReactRedux
//


//use Provider in react-redux

// import {Provider} from "react-redux";
// import store from "./reduxInReact/index"
//<Provider store={store}>
//             <h1>ReactRedux</h1>
//         </Provider>