import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Main from '../Main';

export default (
  <Router>
    <div className="app-wrapper">
      <Route exact path="/" component={Main} />
    </div>
  </Router>
);
