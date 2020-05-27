import React, { lazy, Suspense } from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import history from '../utils/history';

import Loading from '../components/Common/Loading/Loading';

const PCIndex = lazy(() => import('../pages/PCIndex/PCIndex'));
const MobileIndex = lazy(() => import('../pages/MobileIndex/MobileIndex'));

export default () =>
  <Router history={history}>
    <Suspense fallback={<Loading/>}>
      <Switch>
        <Route path='/pc' exact component={PCIndex}/>
        <Route path='/yd' exact component={MobileIndex}/>
      </Switch>
    </Suspense>
  </Router>;
