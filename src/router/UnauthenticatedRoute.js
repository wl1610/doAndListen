import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { queryString } from '../utils/urlHelper';

// 没有登录信息可访问的路由 例如 登录/注册页，可重定向到首页或学习中心
const isLogin = false;

export default ({ component: C, props: cProps, ...rest }) => {
  const redirect = queryString('fromurl');
  return (
    <Route
      {...rest}
      render={props =>
        !isLogin
          ? <C {...props} {...cProps} />
          : <Redirect to={ redirect === '' || redirect === null ? '/' : redirect }/>}
    />
  )
};
