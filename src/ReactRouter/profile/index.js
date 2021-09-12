import React from "react"
import {Link,Switch,Route, useRouteMatch} from "react-router-dom"

import Settings from "./Settings"
import Info from "./Info"

function Profile() {
    const match = useRouteMatch();
    console.log(match);
    const {path,url} = useRouteMatch();
    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to={`${path}/info`}>Profile Info</Link></li>
                <li><Link to={`${path}/settings`}>Profile Settings</Link></li>
            </ul>
            <Switch>
                <Route exact path={`${path}/info`} component={Info} />
                <Route exact path={`${path}/settings`} component={Settings} />
            </Switch>

        </div>
    )
}

export default Profile