const redux = require("redux");


function reduser(state = {count: 0}, action) {
    if (action.type === "decrement") {
        return {
            count: state.count - 1
        }
    } else if (action.type === "increment") {
        return {
            count: state.count + 1
        }
    } else if (action.type === "double") {
        return {
            count: state.count * state.count
        }
    } else {
        return state
    }
}

const store = redux.createStore(reduser);

store.subscribe(() => {
    console.log("hi", store.getState())
})

store.dispatch({type: "decrement"})  //-1
store.dispatch({type: "increment"})  //0
store.dispatch({type: "double"})     //0
store.dispatch({type: "increment"})  //1
store.dispatch({type: "increment"})  //2
store.dispatch({type: "double"})    //4

