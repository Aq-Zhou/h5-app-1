import React, { useEffect, useState } from "react";
import { Route, withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { KeepaliveRouterSwitch, KeepaliveRoute, addKeeperListener } from 'react-keepalive-router'
import NoMatch from "./views/Nomatch";
import Home from "./views/Home";
import Write from "./views/Write";
import Show from "./views/Show";
import Sandtable from "./views/Sandtable";
import Type from "./views/Type";
import Housetype from "./views/Housetype";
import Final from "./views/Final";
import Landscape from "./views/Landscape";
import Viewbird from "./views/Viewbird";
import Gallery from "./views/Gallery";
import Total from "./views/Total";
import { useDispatch, useSelector } from "react-redux";


const App = (props) => {
    console.log('111111111111111111111111111')
    const projectName = useSelector(state => state.projectName)

    console.log(projectName)
    console.log(props.location.pathname)

    useEffect(() => {
        // 缓存监听
        // addKeeperListener((history, cacheKey) => {
        //     console.log(cacheKey, '-------')
        //
        //     if (cacheKey !== '/home' && cacheKey !== '/write') {
        //         if (projectName === '') {
        //             console.log('这里要发生跳转')
        //         }
        //     }
        // })

        if(props.location.pathname !== '/home' && props.location.pathname !== '/write') {
            if(projectName ===''){
                props.history.push('home')
            }
        }

    })



    return (

        <div>

            <KeepaliveRouterSwitch>
                <Route exact path="/home">
                    <Home />
                </Route>

                <KeepaliveRoute exact path='/write' component={Write} />

                <KeepaliveRoute exact path="/show" component={Show} />

                <KeepaliveRoute exact path="/viewbird">
                    <Viewbird />
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/sandtable">
                    <Sandtable />
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/type">
                    <Type />
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/housetype">
                    <Housetype />
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/landscape">
                    <Landscape />
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/gallery">
                    <Gallery />
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/final">
                    <Final />
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/total">
                    <Total />
                </KeepaliveRoute>

                <Redirect exact from="/" to="/home" />
                <Route path="*">
                    <NoMatch />
                </Route>
            </KeepaliveRouterSwitch>
        </div>
    );
}

export default withRouter(App);



