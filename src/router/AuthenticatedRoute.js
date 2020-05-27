import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { dealCookie } from '../utils/common';
// 需要登录信息才可访问的路由，例如 学习中心
const isLogin = dealCookie.get('u_token');

export default ({ component: C, props: cProps, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      isLogin
        ? <C {...props} {...cProps} />
        : <Redirect
          to={`/login?fromurl=${props.location.pathname}${props.location
            .search}`}
        />}
  />
