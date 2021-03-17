import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHome from "./components/AppHome";
import Chatrooms from "./components/Chatrooms";

import MessageContainer from "./components/Messages";
import Sidebar from "./components/Sidebar";

import { useDispatch, batch } from "react-redux";
import { thunkInitSocket } from "./store/socket/thunk";
import { thunkGetChatrooms } from "./thunk";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    batch(() => {
      dispatch(thunkInitSocket());
      dispatch(thunkGetChatrooms());
    });
  });

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/app">
            <section className="main-content columns is-fullheight">
              {/* Sidebar for whole app */}
              <Sidebar />

              {/* App Home */}
              <Route exact path="/app">
                <AppHome />
              </Route>

              {/* Chatrooms */}
              <Route exact path="/app/chatrooms">
                <Chatrooms />
              </Route>

              {/* Single Chatroom */}
              <Route path="/app/chatrooms/:id">
                <MessageContainer />
              </Route>

              {/* Users */}
              <Route exact path="/app/users"></Route>

              {/* Single User */}
              <Route path="/app/users/:id"></Route>
            </section>
          </Route>
          {/* Defualt Route */}
          <Route path="/">
            <div>Please login</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
