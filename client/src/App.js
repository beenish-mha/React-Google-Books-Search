import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import Saved from "./components/Saved";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <div className="route">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/search" exact component={Search} />
          <Route path="/saved" exact component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
