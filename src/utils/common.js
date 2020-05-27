
/**
 * 将异步setState变成同步
 *
 * @param {*} state
 * @returns
 * @memberof Grade
 */
export function setStateAsync(state, that) {
  return new Promise((resolve) => {
    that.setState(state, resolve)
  });
}
