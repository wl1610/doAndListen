// JSON => url参数(String)
export function queryParams(json) {
  return Object.keys(json)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(json[k]))
    .join('&');
}

// 获取url参数 返回所有参数的数组
export function getUrlParams(url = window.location.href) {
  const arg = url.substring(url.lastIndexOf('?') + 1, url.length);
  const argument = [];
  const args = arg.split('&');
  for (let i = 0; i < args.length; i++) {
    const tmp = args[i].split('=');
    argument[tmp[0]] = decodeURIComponent(tmp[1]);
  }
  return argument;
}

// 获取url某一个参数
export function queryString(name, url = window.location.href) {
  name = name.replace(/[[]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i');
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
