import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import RepoTable from "./components/RepoTable";
import Repository from "./components/Repository";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={RepoTable} />
          <Route path="/:name" component={Repository} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
