/**
 * 根据cookie的键值获取cookie的值。
 * @param {string} name cookie键值
 * @return {string}
 */
export function getCookie(name: string) {
  const start = document.cookie.indexOf(name + '=');
  const len = start + name.length + 1;
  if (!start && name !== document.cookie.substring(0, name.length)) {
    return '';
  }
  if (start === -1) return '';
  let end = document.cookie.indexOf(';', len);
  if (end === -1) end = document.cookie.length;
  return decodeURIComponent(document.cookie.substring(len, end));
}

/**
 * 设置cookie的值。
 * @param {string} name cookie键值
 * @param {string} value  cookie值
 * @param {number} expires  失效时间，小时计数，`1`就是1小时
 * @param {string} [path]  设置cookie所在目录
 * @param {string} [domain]  设置cookie所在域
 * @param {string} [secure]  设置https only的cookie
 */
export function setCookie(name: string, value: string, expires = 1, path?: string, domain?: string, secure?: string) {
  expires = expires * 60 * 60 * 1000;
  const expires_date: any = new Date(new Date().getTime() + expires);
  document.cookie =
    name +
    '=' +
    encodeURIComponent(value) +
    (expires ? ';expires=' + expires_date.toGMTString() : '') /*expires.toGMTString()*/ +
    (path ? ';path=' + path : '') +
    (domain ? ';domain=' + domain : '') +
    (secure ? ';secure' : '');
}

/**
 * 根据cookie的键值移除cookie的值。
 * @param {string} name cookie键值
 * @return {string}
 */
export function removeCookie(name: string, path: string, domain: string) {
  if (getCookie(name))
    document.cookie =
      name +
      '=' +
      (path ? ';path=' + path : '') +
      (domain ? ';domain=' + domain : '') +
      ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}

/**
 * 清除所有cookie。
 */
export function clearCookies(path: string, domain: string) {
  const cookies = document.cookie.split(';');
  cookies.forEach(cookie => {
    document.cookie =
      cookie.trim() +
      (path ? ';path=' + path : '') +
      (domain ? ';domain=' + domain : '') +
      ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
  });
}
