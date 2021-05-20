import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { observer } from 'mobx-react-lite';

import HomePage from "./Components/HomePage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default observer(Routes);
