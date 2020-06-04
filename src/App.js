import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import Squares from "./SquareChallenge/Squares";
import SignUp from "./Password/SignUp";
import Button from "./Button/Button";
import Form from "./Form/Form";
import Articles from "./News/Articles";
import Article from "./News/Article";
import CreateArticle from "./News/CreateArticle";
import CreateComment from "./News/CreateComment";
import Footer from "./Footer";

//Hooks
import ClickedHooks from "./Hooks/ClickedHooks";
import SquareHooks from "./Hooks/SquareHooks";
import CounterHooks from "./Hooks/CounterHooks";
import StepCountHooks from "./Hooks/StepCountHooks";
import CatchMeHooks from "./Hooks/CatchMeHooks";
import RollCall from "./Hooks/RollCall";
// import PasswordStrength from "./Hooks/PasswordStrength";

//Reducers
import ClickedReducer from "./Reducer/ClickedReducer";
import StepReducer from "./Reducer/StepReducer";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const App = () => (
  <Router>
    <Fragment>
      <Link to="/"><h1 className="d-flex flex-column align-items-center p-4">Hiya!</h1></Link>

      <Switch>
        <Route exact path="/squares">
          <Squares colour="pink"></Squares>
        </Route>

        <Route exact path="/sign-up">
          <SignUp minimumLength = { 6 }></SignUp>
        </Route>

        <Route exact path="/button">
          <Button handleUpdate = { (value) => console.log(value) }></Button>
        </Route>

        <Route exact path="/form">
          <Form></Form>
        </Route>

        <Route exact path="/news">
          <Articles />
        </Route>

        <Route exact path="/news/:id" render={ ({match}) => (
           <Article id= {match.params.id}/>
         )}>  
        </Route>

        <Route exact path="/make">
          <CreateArticle />
          {/* <CreateComment /> */}
        </Route>

        <Route exact path="/hooks">
          <ClickedHooks />
          <SquareHooks />
          <CounterHooks />
          <StepCountHooks />
          <CatchMeHooks />
          <RollCall />
          {/* <PasswordStrength /> */}
        </Route>

        <Route exact path="/reducers">
          <ClickedReducer />
          <StepReducer />
        </Route>


     
      </Switch>

      <Footer></Footer>

    </Fragment>
  </Router>
)

export default App;
