/* eslint-disable guard-for-in */

/**
 * Возвращает массив вида [{key: prop, value: obj[prop]}, ...]
 *
 * @param {object} obj - Объект
 */
function getArray(obj) {
  const arr = [];
  for (const prop in obj) {
    arr.push({
      key: prop,
      value: obj[prop],
    });
  }
  return arr;
}

/**
 * Сортирует значения key по алфавиту
 *
 * @param {array} arr - Массив
 */
function orderByAlphabet(arr) {
  arr.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    if (a.key < b.key) {
      return -1;
    }
    return 0;
  });
}

/**
 * Возвращает массив свойств объекта со значениями,
 * отсортированными по полученным значениям keys,
 * далее оставшиеся элементы сортируются по алфавиту.
 *
 * @param {object} obj - Исходный объект
 * @param {array} keys - Значения key для сортировки
 */
function orderByProps(obj, keys = []) {
  const arr = getArray(obj);

  orderByAlphabet(arr);

  if (Array.isArray(keys)) {
    keys.reverse().forEach((key) => {
      for (let i = 0; i < arr.length; i += 1) {
        if (key === arr[i].key) {
          arr.unshift(arr.splice(i, 1)[0]);
          break;
        }
      }
    });
  }
  return arr;
}


export default orderByProps;
