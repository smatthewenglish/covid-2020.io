import './index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import * as serviceWorker from './serviceWorker';




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();