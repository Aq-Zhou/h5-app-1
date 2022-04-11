import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import React from "react";
import {Form} from "antd";
import styled from "styled-components";

const Body = styled.div`
  min-height: 50%;
  
`



function Show() {
    let {path, url} = useRouteMatch();

    return (
        <Body>

            <Switch>
                <Route exact path={path}>
                    <h2>请选择表现形式</h2>
                </Route>
                {/*<Route path={`${path}/:inputId`}>*/}
                {/*    <Write/>*/}
                {/*</Route>*/}
            </Switch>


            <ul>
                <li>
                    <Link to={`${url}/packing`}>视频包装式区位</Link>
                </li>
                <li>
                    <Link to={`${url}/shuttle`}>VR无缝穿梭式区位</Link>
                </li>
                <li>
                    <Link to={`${url}/nothing`}>不需要区位展示</Link>
                </li>
            </ul>

        </Body>
    );
}

export default Show;
