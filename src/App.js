import React, {Component} from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import routes from "./router/router";


function App() {
    return (
        <Home />
    )
}

export default App;
