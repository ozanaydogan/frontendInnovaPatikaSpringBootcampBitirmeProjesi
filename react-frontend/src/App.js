import React from "react";
import "./App.css";//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";//router

import ListEmployeeComponent from "./components/ListEmployeeComponent";//ListComponent
import HeaderComponent from "./components/HeaderComponent";//HeaderComponent
import FooterComponent from "./components/FooterComponent";//Footer
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import CheckCreditScoreComponent from "./components/CheckCreditScoreComponent";
import CheckCreditScoreScreenComponent from "./components/CheckCreditScoreScreenComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
            <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
            <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
            <Route path = "/check-score-employee/:citizenshipNumber" component = {CheckCreditScoreComponent}></Route>
            <Route path = "/deneme/:citizenshipNumber" component = {CheckCreditScoreScreenComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
