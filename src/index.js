
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import 'antd/dist/antd.css';

import './index.css'

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router} from "react-router-dom";



ReactDOM.render(
    <Provider store={store} >
        <Router basename='xsgj'>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);


