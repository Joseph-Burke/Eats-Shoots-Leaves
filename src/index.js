import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';
import Recipe from './components/Recipe';

require('dotenv').config();

const renderProject = async () => {
  const fulfilledStore = await store;
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={fulfilledStore}>
        <Router>
          <Switch>

            <Route exact path="/">
              <App />
            </Route>

            <Route exact path="/recipe/:id">
              <Recipe />
            </Route>

          </Switch>
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

renderProject();
