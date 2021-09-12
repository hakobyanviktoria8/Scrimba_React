import React, {useState} from "react";
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Profile from "./profile";
import Services from "./Services/Services";
import Every from "./Services/EveryService";
import Products from "./product/Products";
import ProductDetail from "./product/ProductDetail";

const ReactRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/services">Services</Link>
            <Link to="/private">Private</Link>
            <Link to="/products">Products</Link>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about"><About/></Route>
                <Route path="/profile"><Profile/></Route>
                <Route exact path="/services"><Services/></Route>
                <Route path="/services/:serviceId"><Every/></Route>
                <Route path="/private">
                    {
                        isLoggedIn ?
                            <h1>Protected page, must be logged in to be here</h1>
                            :
                            <Redirect to={"/login"}/>
                    }
                {/*see more*/}
                {/*https://reactrouter.com/web/example/auth-workflow*/}
                </Route>
                <Route path="/login">
                    <button onClick={() => setIsLoggedIn(true)}>Log in</button>
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route path="/products/:slug">
                    <ProductDetail />
                </Route>
            </Switch>
        </Router>
    )
};

export default ReactRouter