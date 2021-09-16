import redux, {createStore} from "redux"

export function increment() {
    return {
        type: "increment",
    }
}

//decrement
export function decrement() {
    return {
        type: "decrement",
    }
}

function reducer(count = 0, action) {
    switch (action.type) {
        case "increment":
            return count + 1
        case "decrement":
            return count - 1
        default:
            return count
    }
}

const store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
})

export default store
// store.dispatch(increment(22))
// store.dispatch(decrement(2))

