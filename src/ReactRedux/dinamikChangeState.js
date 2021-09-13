const redux = require("redux");

function changeStateFunc(el) {
    return{
        type: "Change",
        element: el
    }
}

function reducer(state = 0, action) {
    if (action.type === "Change"){
        return state + action.element
    } else {
        return state
    }
}


const store = redux.createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(changeStateFunc(911))