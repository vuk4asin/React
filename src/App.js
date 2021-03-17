import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { increment } from "./actions";

function App() {
  const isAuth = useSelector((state) => state.isAuth);

  return (
    <Router>
      {/* <div className="App"> */}
      <Nav />
      <Switch>
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
