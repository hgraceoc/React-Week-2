import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Squares from "./SquareChallenge/Squares";
import Square from "./SquareChallenge/Square";
import Password from "./Password/Password"
import SignUp from "./Password/SignUp";

const App = () => (
  <Router>
    <Fragment>
      <Squares></Squares>
      <SignUp minimumLength = { 6 }></SignUp>
    </Fragment>
  </Router>
)

export default App;
