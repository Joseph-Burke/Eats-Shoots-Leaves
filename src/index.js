import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";
import Recipe from "./components/Recipe";
require("dotenv").config();

(async function() {
  const fulfilledStore = await store;
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={fulfilledStore}>
        <Router>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>

            <Route path="/recipe/:id" children={ <Recipe /> } />
          </Switch>
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();
