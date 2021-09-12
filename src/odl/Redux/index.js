const redux = require("redux");


function reducer(count = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: count + 1
            };
        case "DECREMENT":
            return {
                count: count - 1
            };
        default:
            return count
    }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch({type: "INCREMENT"});
store.dispatch({type: "INCREMENT"});
store.dispatch({type: "DECREMENT"});