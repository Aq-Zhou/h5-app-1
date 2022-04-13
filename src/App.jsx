import React from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
// , Link, useParams, useRouteMatch
import Redirect from "react-router-dom/es/Redirect";
import NoMatch from "./views/Nomatch";
import Home from "./views/Home";
import Write from "./components/Write";
import Nothing from "./components/Nothing";
import Shuttle from "./components/Shuttle";
import Packing from "./components/Packing";
import Show from "./components/Show";


export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route exact path="/show">
                        <Show/>
                    </Route>
                    <Route exact path='/write'>
                        <Write/>
                    </Route>
                    <Route exact path='/packing'>
                        <Packing/>
                    </Route>
                    <Route exact path='/shuttle'>
                        <Shuttle/>
                    </Route>
                    <Route exact path='/nothing'>
                        <Nothing/>
                    </Route>
                    <Redirect exact from="/" to="/home"/>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}



