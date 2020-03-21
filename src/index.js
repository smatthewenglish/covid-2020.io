import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { render } from "react-dom";
// import ParticlesBg from "particles-bg";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history'

class Particle extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
       
      </div>
    );
  }
}


const rX = document.querySelector("#zip");
if (rX) {
  render(<Particle />, document.getElementById('zip'));
}







function Edu() {
  return (
    <div>
      • Rheinische Friedrich-Wilhelms-Universität Bonn<br/>
      • The University of Hong Kong (香港大學)<br/>
      • 汉语水平考试 (Hanyu Shuiping Kaoshi)<br/>
      • New York University (NYU)
    </div>
  );
}

function Tsc() {
  return (
    <div>
      • iOS App<br/>
      • Open Source
    </div>
  );
}

function Bio() {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
    </div>
  );
}

const rootElement = document.querySelector("#root");
//render(<App />, document.getElementById('root'));
if (rootElement) {

  //meisterstück

const history = createBrowserHistory()

  render(
    <div>

    </div>,
    rootElement
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();