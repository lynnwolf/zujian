/** @file 工具函数 * */

/**
 * 获取数据类型
 * @param { any } 任意数据
 * @return { string } 数据的类型
 */
export const getObjType = obj => {
  let toString = Object.prototype.toString;
  let map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
  };
  if (obj instanceof Element) {
    return 'element';
  }
  return map[toString.call(obj)];
};

/**
 * 对象深拷贝
 * @param { any } 任意数据
 * @return { any } 深拷贝完成的数据
 */
export const deepClone = data => {
  let type = getObjType(data);
  let obj;
  if (type === 'array') {
    obj = [];
  } else if (type === 'object') {
    obj = {};
  } else {
    //不再具有下一层次
    return data;
  }
  if (type === 'array') {
    for (let i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]));
    }
  } else if (type === 'object') {
    for (let key in data) {
      obj[key] = deepClone(data[key]);
    }
  }
  return obj;
};

/**
* 获取url参数字符串
* @param { string } url 目标key
* @return { string } url 预期value | false
*/
export const getSearchQuerys = (variable) => {
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return (false);
}

/**
 * 防抖函数
 * @param { function } 防抖执行函数
 * @param { number } 延迟执行时间
 * @return { void }
 */
export const debounce = (() => {
  let timer = {};
  return function (func, wait = 500) {
    let args = arguments; // arguments中存在e
    let name = arguments[0].name || "arrow"; // 箭头函数
    !!(timer[name]) && clearTimeout(timer[name]);
    timer[name] = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
})();

/**
 * 节流函数
 * @param { function } 节流执行函数
 * @param { number } 延迟执行时间
 * @return { void }
 */
export const throttle = (() => {
  let timeout = null;
  return function (func, wait) {
    let context = this;
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  };
})();

/**
 * 数字金额转化（千分位加逗号分隔）
 * @param { number | string } 
 * @return { string }
 */
export const thousands = (num) => {
  const numStr = num.toString();
  return numStr.replace(numStr.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g, "$1,");
};

/**
 * 数字转化为百分数
 * @param { number | string } 
 * @param { number } 小数精度
 * @return { string }
 */
export const numPercentage = (num, digit) => {
  let res = "";
  res = `${(Math.abs(Number(num) * 100)).toFixed(digit)}%`;
  return res;
};

