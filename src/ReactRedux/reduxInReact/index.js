import redux, {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"

export function increment() {
    return (dispatch, getState) => {
        const number = getState()
        const baseUrl = "https://swapi.co/api/people"
        fetch(`${baseUrl}/${number}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch({
                    type: "INCREMENT",
                    payload: res
                })
            })
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

function reducer(count = 1, action) {
    switch(action.type) {
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store

//increment old vertion without redux-thunk
// export function increment() {
//     return {
//         type: "increment",
//     }
// }

// //decrement
// export function decrement() {
//     return {
//         type: "decrement",
//     }
// }
//
// function reducer(count = 0, action) {
//     switch (action.type) {
//         case "increment":
//             return count + 1
//         case "decrement":
//             return count - 1
//         default:
//             return count
//     }
// }
//
// const store = createStore(reducer, applyMiddleware(thunk));
//
// store.subscribe(() => {
//     console.log(store.getState());
// })
//
// export default store

