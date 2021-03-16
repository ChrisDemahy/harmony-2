import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MessageContainer from "./components/MessageContainer";
import Sidebar from "./components/Sidebar";
import logo from "./logo.svg";

const App = () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/app">
            <section className="main-content columns is-fullheight">
              <Sidebar />

              <MessageContainer />
            </section>
          </Route>
          <Route path="/">
            <div>Please login</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
