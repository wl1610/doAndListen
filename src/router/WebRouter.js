import React, { lazy, Suspense } from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import history from '../utils/history';

import Loading from '../components/Common/Loading/Loading';

const Home = lazy(() => import('../pages/PCIndex/PCIndex'));

export default () =>
  <Router history={history}>
    <Suspense fallback={<Loading/>}>
      <Switch>
        <Route path='/pc' exact component={Home}/>
      </Switch>
    </Suspense>
  </Router>;
