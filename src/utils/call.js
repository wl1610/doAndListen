
const etCall = function(message, time) {
  return new Promise(function(resolve, reject) {
    if (typeof cefQuery === 'undefined') {
      setTimeout(function() {
        resolve('notcef');
      }, 100);
    } else {
      let timeout = null;
      if (time) {
        timeout = setTimeout(function() {
          reject(new Error('method not exist', 404));
        }, time);
      }
      window.cefQuery({
        request: JSON.stringify(message),
        onSuccess: function(response) {
          if (timeout) clearTimeout(timeout);
          resolve(JSON.parse(response));
        },
        onFailure: function(errorCode, errorMessage) {
          if (timeout) clearTimeout(timeout);
          reject(new Error(errorMessage, errorCode));
        }
      });
    }
  });
};

export async function localCall(type, parameter, time) {
  if (parameter === undefined || parameter === null) {
    parameter = '';
  }
  return await etCall({ type: type, param: parameter }, time);
}

// 关闭程序
export async function exit() {
  return await localCall('exit')
}

// 弹出设置
export async function setting() {
  return await localCall('setting');
}

// 进入教室听课
export async function enterClassRoom() {
  return await localCall('enterclassroom');
}

// 页面加载完成
export async function homepageComplete() {
  return await localCall('homepageComplete');
}

// 获取临时token
export async function getTmpToken() {
  return await localCall('getTmpToken');
}

// 打开网站
export async function openUrl(url) {
  return await localCall('openUrl:' + url);
}

/**
 * 用本地浏览器打开网页
 * @param url
 * @return {Promise}
 */
export async function openBrowser(type, url) {
  const ret = await localCall(type, {
    url: url
  });
  if (ret === 'notcef') {
    window.open(url, 'openBrowser');
  }
  return true;
}
// 登录页面使用
/**
 * 最小化窗口
 * @param url
 * @return {Promise}
 */
export async function minimize() {
  return await localCall('minimize');
}

/**
 * 关闭窗口
 * @param url
 * @return {Promise}
 */
export async function closeWindow() {
  return await localCall('closeWindow');
}

/**
 * 发送正式token
 * @param url
 * @return {Promise}
 */
export async function sendToken(token) {
  return await localCall('sendToken', { 'token': token });
}

/**
 * 调用户使用协议和隐私协议
 * @param url
 * @return {Promise}
 */
export async function openProtocol(url) {
  return await localCall('openProtocol', { 'protocolUrl': url });
}

/**
 * 获取客户端版本
 *
 * @export
 * @returns
 */
export async function clientVersion() {
  return await localCall('getVersion');
}
