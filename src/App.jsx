import React from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
// , Link, useParams, useRouteMatch
import {Redirect} from "react-router-dom";
import NoMatch from "./views/Nomatch";
import Home from "./views/Home";
import Write from "./components/Write";
import Every from "./components/Every";
import Show from "./components/Show";
import Sandtable from "./components/Sandtable";


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
                        <Every/>
                    </Route>
                    <Route exact path='/shuttle'>
                        <Every/>
                    </Route>
                    <Route exact path='/nothing'>
                        <Every/>
                    </Route>
                    <Route exact path="/sandtable">
                        <Sandtable/>
                    </Route>
                    <Route exact path="/total">
                        {/*<Total/>*/}
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



