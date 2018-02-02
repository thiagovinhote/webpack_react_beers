import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from 'components/Layout';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import NotFound from 'pages/NotFound';

const Routes = ({ history }) => (
  <Layout>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Layout>
);

Routes.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Routes;
