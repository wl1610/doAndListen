/**
 * Created by wanlei on 2019/8/14.
 * 后端api接口
 */

import { codeMessage } from '../constants/codeMessage';
import { get, post } from '../utils/restCall';
import { message } from 'antd';

// 处理code码
function dealCode(code, object) {
  return !!Object.keys(object).includes(code.toString());
}

/* 处理 result 结果*/
function handleResult(result, isLogin = true) {
  const { code } = result;
  const { tokenMsg, otherMsg, specialMsg } = codeMessage;
  if (code === 0) {
    return result;
  } else if (dealCode(code, tokenMsg)) {
    // 如果不需要登陆返回信息数据
    if (!isLogin) {
      return result;
    }
    message.error('登录信息失效，请重试！');
    // 后续待定
  } else if (dealCode(code, otherMsg)) {
    message.error('操作超时，请重试！');
    throw new Error(JSON.stringify(result));
  } else {
    const { code, data } = result;
    return {
      code,
      data,
      message: specialMsg[code] || result.message
    };
  }
}
