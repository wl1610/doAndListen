/**
 * Created by wanlei on 2019/8/15.
 */
import 'whatwg-fetch'
import { message } from 'antd';
import { queryParams } from './urlHelper';
import { APIHOST } from '../constants/common';
import { dealCookie } from '../utils/common';

const fetchAsync = async function(url, method, data, params = {}) {
  const {
    contentType = 'application/json; charset=UTF-8',
    sourceType = null,
    isAddToken = null,
    isAddCookie = null,
    isAddSlant = null,
    newHeader = null
  } = params
  let apiHostPath = APIHOST;

  if (url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1) {
    apiHostPath = '';
  }

  let myHeaders = new Headers();
  if (sourceType) {
    myHeaders.append('sourceType', sourceType);
  }

  if (isAddToken) {
    const token = dealCookie.get('u_token');
    myHeaders.append('token', token);
  }

  if (url.indexOf('getTmpToken') > -1) {
    myHeaders.append('uid', 12345);
  }

  myHeaders.append('Content-Type', contentType || 'application/json; charset=UTF-8');

  if (newHeader) {
    myHeaders = new Headers();
  }

  const req = {
    method: method,
    headers: myHeaders
  };

  if (isAddCookie) {
    req['credentials'] = 'include';
  }

  if (method === 'GET') {
    if (!data) {
      data = {};
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(data);
    if (isAddSlant) {
      url = url.slice(0, url.length - 1) + '/'
    }
  } else {
    if (contentType === 'application/json; charset=UTF-8') {
      req.body = JSON.stringify(data);
    } else {
      let ret = '';
      for (var i in data) {
        ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&';
      }
      req.body = ret;
    }
  }

  return fetch(apiHostPath + url, req).then(function(response) {
    if (!response.ok) {
      message.error('服务器开小差了，请稍后再试！');
      return response.json().then(function(errorInfo) {
        const error = new Error('serverError');
        error.source = 'server';
        error.error = errorInfo;
        throw error;
      });
    }
    return response.json();
  }).catch(function(err) {
    if (!err.source) {
      err.source = 'network';
    }
    throw err;
  });
};

export async function get(url, data = null, params) {
  return await fetchAsync(url, 'GET', data, params);
}

export async function post(url, data = null, params) {
  return await fetchAsync(url, 'POST', data, params);
}
