import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Notes from './components/Notes';
import Login from './components/Login';
import NotFound from './components/NotFound';

import '../node_modules/semantic-ui-css/semantic.css';

const Main = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/home" component={Home} />
            <Route path="/notes" component={Notes} />
            <Route path="/login" component={Login} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

render(
  <Main />,
  document.getElementById('root')
);
