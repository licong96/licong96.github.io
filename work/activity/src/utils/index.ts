
/**
 * 在 url 中获取对应参数的值（如果参数里面有 '=' 号，就完蛋了）
 * @export
 * @param {String} variable 参数 key
 * @returns values || false
 */
export function getQueryVariable (variable: string) {
  const query = window.location.href.split('?')[1]
  if (query) {
    const vars = query.split('&')
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=')
      if (pair[0] === variable) { return pair[1] }
    }
  }
  return false
}

/**
 * 从url获取参数
 *
 * @export
 * @param {string} name
 * @returns {string}
 */
// export function queryURL(name: string): string {
//   const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
//   const result = window.location.search.substr(1).match(reg)
//   if (result !== null) {
//       return decodeURI(result[2])
//   }
//   return null
// }


/**
 * 返回时间对象
 * @param {string} num
 * @returns {Object}
 */
export function timeObject(time: string) {
  const date = new Date(time);

  const zero = (num: number) => num >= 10 ? String(num) : '0' + num;

  const year = date.getFullYear();
  const month = zero(date.getMonth() + 1);
  const day = zero(date.getDate());
  const hours = zero(date.getHours());
  const minutes = zero(date.getMinutes());

  return {
    year,
    month,
    day,
    hours,
    minutes,
  }
}

// 随机区间数
export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}