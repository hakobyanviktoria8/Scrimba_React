import store from "./redux";
import {changeCount} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from "./redux/favoriteThings"
import {setYouTubeTitle,incrementViewCount,upvoteVideo,downvoteVideo} from "./redux/youTubeVideo"
import {login, logout} from "./redux/login"

store.dispatch(changeCount(42))

store.dispatch(addFavoriteThing("new Arr"))
store.dispatch(addFavoriteThing("new Arr1"))
store.dispatch(removeFavoriteThing("new arr1"))

store.dispatch(setYouTubeTitle("New title"))
store.dispatch(incrementViewCount())
store.dispatch(incrementViewCount())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(upvoteVideo())
store.dispatch(downvoteVideo())

store.dispatch(login({firstName: "Viktorya", lastName:"Hakobyan", id:"1", email:"viki@mail.com"}))
store.dispatch(login({firstName: "Viki", lastName:"GO", id:"2", email:"viki-go@mail.com"}))
store.dispatch(logout())