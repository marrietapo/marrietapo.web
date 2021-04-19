import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Main from "../components/Main";

const AppRouter = () => {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route path="/" component={ Main } exact/>
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
