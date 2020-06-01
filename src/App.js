import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Squares from "./SquareChallenge/Squares";
import Square from "./SquareChallenge/Square";

const App = () => (
  <Router>
    <Fragment>
      <Squares></Squares>
    </Fragment>
  </Router>
)

export default App;
