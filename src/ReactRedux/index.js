const redux = require("redux")

const initialState = {
    count: 0
}

//reducer(state, action) pure function
function reducer(state = initialState, action) {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

//create Store object with reduser
const store = redux.createStore(reducer);

//current state see
store.subscribe(()=>{
    console.log(store.getState())
})

//then dispatch  store give atribute (reducer)
store.dispatch({type: "INCREMENT"})
store.dispatch({type: "INCREMENT"})
store.dispatch({type: "DECREMENT"})


function increment() {
    return {
        type: "INCREMENT"
    }
}

console.log("INCREMENT FUNCTION ",increment())