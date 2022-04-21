import React, {useEffect} from "react";
import {Route, withRouter} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {KeepaliveRouterSwitch, KeepaliveRoute, addKeeperListener} from 'react-keepalive-router'
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
import Price from "./components/Price";


const App = (props) => {
    console.log(props)

    useEffect(() => {
        /* 增加缓存监听器 */
        // addKeeperListener((history, cacheKey) => {
        //     if (history) console.log('当前激活状态缓存组件：' + cacheKey)
        // })

    }, [])

    return (

        <div>
            <KeepaliveRouterSwitch>
                <Route exact path="/home">
                    <Home/>
                </Route>

                <KeepaliveRoute exact path='/write' component={Write}/>

                <KeepaliveRoute exact path="/show" component={Show}/>

                <KeepaliveRoute exact path="/viewbird">
                    <Viewbird/>
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/sandtable">
                    <Sandtable/>
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/type">
                    <Type/>
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/housetype">
                    <Housetype/>
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/landscape">
                    <Landscape/>
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/gallery">
                    <Gallery/>
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/final">
                    <Final/>
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/total">
                    <Total/>
                </KeepaliveRoute>

                <Route path="/price">
                    <Price />
                </Route>

                <Redirect exact from="/" to="/home"/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </KeepaliveRouterSwitch>
        </div>
    );
}

export default withRouter(App);



