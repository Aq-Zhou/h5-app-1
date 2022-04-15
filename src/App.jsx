import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

import {
    Provider as KeepAliveProvider,
    KeepAlive
} from 'react-keep-alive';

import { Provider } from "react-redux";
import store from "./store";

import NoMatch from "./views/Nomatch";
import Home from "./views/Home";
import Write from "./components/Write";
import Every from "./components/Every";
import Show from "./components/Show";
import Sandtable from "./components/Sandtable";
import Type from "./views/Type";


export default function App() {
    return (
        <Provider store={store} >
            <KeepAliveProvider>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/home">
                                <KeepAlive><Home /></KeepAlive>
                            </Route>
                            
                            <Route exact path="/show">
                                <KeepAlive><Show /></KeepAlive>
                            </Route>

                            <Route exact path='/write'>
                                <KeepAlive><Write /></KeepAlive>
                            </Route>
                            
                            <Route exact path='/packing'>
                                <KeepAlive><Every /></KeepAlive>
                            </Route>

                            <Route exact path='/shuttle'>
                                <KeepAlive><Every /></KeepAlive>
                            </Route>

                            <Route exact path='/nothing'>
                                <KeepAlive><Every /></KeepAlive>
                            </Route>

                            <Route exact path="/sandtable">
                                <KeepAlive><Sandtable /></KeepAlive>
                            </Route>

                            <Route exact path="/total">
                                <KeepAlive>{/*<Total/>*/}</KeepAlive>
                            </Route>

                            <Redirect exact from="/" to="/home" />

                            <Route path="*">
                                <KeepAlive><NoMatch /></KeepAlive>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </KeepAliveProvider>

        </Provider>
    );
}



