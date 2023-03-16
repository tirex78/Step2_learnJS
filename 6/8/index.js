/**
 * Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
 * 
 * Сделайте два варианта решения.
 * 
 *     Используя setInterval.
 *     Используя рекурсивный setTimeout.
 * 
 */

const printNumbers = (from, to) => {

  let current = from;

  let timerId = setInterval(() => {
    if (current == to) {
      clearInterval(timerId)
    }
    console.log(current)
    current++
  }, 1000)
}
//printNumbers(1, 10)

const printNumbers2 = (from, to) => {

  let current = from

  setTimeout(timerId = () => {
    if (current < to) {
      setTimeout(timerId, 1000)
    }
    console.log(current)
    current++
  }, 1000)
}
//printNumbers2(1, 10)



/**
 * Что покажет setTimeout?
 * важность: 5
 *
 * В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление,
 * для завершения которого требуется более 100 мс.
 *
 * Когда будет выполнена запланированная функция?
 *
 *     После цикла.
 *     Перед циклом.
 *     В начале цикла.
 *
 * Что покажет alert?
 *
 * let i = 0;
 *
 * setTimeout(() => alert(i), 100); // ?
 *
 * предположим, что время выполнения этой функции >100 мс
 * for(let j = 0; j < 100000000; j++) {
 *   i++;
 * }
 */

// после цикла
// 100000000

