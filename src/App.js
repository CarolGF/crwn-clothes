import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import HatsPage from "./pages/HatsPage/HatsPage";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop/hats' component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
