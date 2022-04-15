import React, {useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import {Redirect} from "react-router-dom";

import { KeepaliveRouterSwitch ,KeepaliveRoute ,addKeeperListener } from 'react-keepalive-router'

import NoMatch from "./views/Nomatch";
import Home from "./views/Home";
import Write from "./components/Write";
import Every from "./components/Every";
import Show from "./components/Show";
import Sandtable from "./components/Sandtable";
import Type from "./views/Type";


export default function App() {

    useEffect(()=>{
        /* 增加缓存监听器 */
        addKeeperListener((history,cacheKey)=>{
            if(history)console.log('当前激活状态缓存组件：'+ cacheKey )
        })
    },[])

    return (

        <div>
            <KeepaliveRouterSwitch>
                <Route exact path="/home">
                    <Home/>
                </Route>

                <KeepaliveRoute exact path='/write' component={Write} />

                <KeepaliveRoute exact path="/show" component={Show} />

                {/*<Route exact path='/packing'>*/}
                {/*    <Every/>*/}
                {/*</Route>*/}
                {/*<Route exact path='/shuttle'>*/}
                {/*    <Every/>*/}
                {/*</Route>*/}
                {/*<Route exact path='/nothing'>*/}
                {/*    <Every/>*/}
                {/*</Route>*/}
                <KeepaliveRoute exact path="/sandtable">
                    <Sandtable/>
                </KeepaliveRoute>

                <KeepaliveRoute exact path="/type">
                    <Type/>
                </KeepaliveRoute>

                <Route exact path="/total">
                    {/*<Total/>*/}
                </Route>
                <Redirect exact from="/" to="/home"/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </KeepaliveRouterSwitch>
        </div>
    );
}



