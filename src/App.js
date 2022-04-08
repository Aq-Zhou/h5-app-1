import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import NoMatch from "./views/Nomatch";
import Home from "./views/Home";

export default function NestingExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/home">主页</Link>
                    </li>
                    <li>
                        <Link to="/inputs">请选择表现形式</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route path="/inputs">
                        <Inputs/>
                    </Route>
                    <Redirect exact from="/" to="/home"/>
                    <Route path="*"><NoMatch/></Route>
                </Switch>
            </div>
        </Router>
    );
}

// function Home() {
//     return (
//         <div>
//             <h2>主页</h2>
//         </div>
//     );
// }

function Inputs() {
    let {path, url} = useRouteMatch();

    return (
        <div>
            <h2>请输入项目名称</h2>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>视频包装式区位</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>VR无缝穿梭式区位</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>不需要区位展示</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>请选择一项</h3>
                </Route>
                <Route path={`${path}/:inputId`}>
                    <Input/>
                </Route>
            </Switch>
        </div>
    );
}

function Input() {
    let {inputId} = useParams();

    return (
        <div>
            <h3>{inputId}</h3>
        </div>
    );
}