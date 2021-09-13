const redux = require("redux")
function increment() {
    return {
        type: "in"
    }
}
function decrement(amount) {
    return {
        type: "de",
        payload: amount
    }
}

const reducer = (state = 0, action) => {
    if (action.type === "de") {
        return state - action.payload
    } else if (action.type === "in") {
        return state + 1
    } else if (action.type === "du") {
        return state * 2
    } else if (action.type === "hv") {
        return Math.floor(state / 2)
    } else {
        return state
    }
}

const store = redux.createStore(reducer);
console.log("Store is ",store)

//use Store methods
//dispatch, subscribe, getState, replaceReducer, @@observable

//subscribe=> follow new state
store.subscribe(() => {
    //getState, get State
    console.log("hi", store.getState())
})
//dispatch send state
store.dispatch({type: "in"}) //1
store.dispatch({type: "hv"})  //0
store.dispatch({type: "du"})//0
store.dispatch(increment()) //1
// store.dispatch({type: "de"})//-1
store.dispatch(increment())//2
store.dispatch(decrement(2))//0
store.dispatch({type:"WEIRD"})  // 0 return state