//moreGlobalVarible
const redux = require("redux");

const inotialState = {
    count: 0,
    sum: {
        one: 0,
        two: 1
    },
    mul: 1,
    favorite: [],
    youtubeVideo: {
        title: "",
        viewCount: 0
    }
}

function sumFunc(num) {
    return {
        type: "SUM",
        payload: num
    }
}

// function setYouTubeTitle(title) {
//     return {
//         type: "SET_YOUTUBE_TITLE",
//         payload: title
//     }
// }

function addFavorite(thing) {
    return {
        type: "AddFavorite",
        payload: thing
    }
}

function removeFavorite(thing) {
    return {
        type: "RemoveFavorite",
        payload: thing
    }
}

function reducer(state = inotialState, action) {
    switch (action.type) {
        case "AddFavorite":
            return {
                favorite: [...state.favorite, action.payload]
            }
        case "RemoveFavorite":
            return {
                favorite: state.favorite.filter(x => x !== action.payload)
            }
        // case "SET_YOUTUBE_TITLE":
        //     return {
        //         ...state,
        //         youtubeVideo: {
        //             title: action.payload,
        //             viewCount: state.youtubeVideo.viewCount + 1
        //         }
        //     }
        case "SUM":
            return {
                ...state,
                sum: {
                    one: action.payload,
                    two: action.payload + 1
                }
            }
        default:
            return state
    }
}


const store = redux.createStore(reducer)


store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addFavorite("lala1"))
store.dispatch(addFavorite("lala2"))
store.dispatch(removeFavorite("lala1"))

store.dispatch(sumFunc(11))












// store.dispatch(setYouTubeTitle("New life, new opportunities"))
// store.dispatch(setYouTubeTitle("Learn Redux"))

//const redux = require("redux")
//
// function changeCount(amount = 1) {
//     return {
//         type: "CHANGE_COUNT",
//         payload: amount
//     }
// }
//
// function addFavoriteThing(thing) {
//     return {
//         type: "add-Favorite-Thing",
//         payload: thing
//     }
// }
//
// const initialState = {
//     count: 0,
//     favoriteThings: []
// }
//
// function reducer(state = initialState, action) {
//     switch(action.type) {
//         case "CHANGE_COUNT":
//             return {
//                 count: state.count + action.payload
//             }
//         case "add-Favorite-Thing":
//             return {
//                 favoriteThings: [...state.favoriteThings, action.payload]
//             }
//         default:
//             return state
//     }
// }
//
// const store = redux.createStore(reducer)
// store.subscribe(() => {
//     console.log(store.getState())
// })
//
// store.dispatch(changeCount(11));
// store.dispatch(addFavoriteThing("Lala"))