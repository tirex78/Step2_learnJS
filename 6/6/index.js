/**
 * Установка и уменьшение значения счётчика
 * важность: 5
 * 
 * Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:
 * 
 *     counter() должен возвращать следующее значение (как и раньше).
 *     counter.set(value) должен устанавливать счётчику значение value.
 *     counter.decrease() должен уменьшать значение счётчика на 1.
 * 
 * Посмотрите код из песочницы с полным примером использования.
 * 
 * P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.
 * 
 */


const makeCounter = () => {
  let count = 0

  const counter = () => count++

  counter.set = val => count = val

  counter.decrease = () => count--

  return counter
}

//let counter = makeCounter()

// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter.set(5))
// console.log(counter.decrease())
// console.log(counter.decrease())



/** Сумма с произвольным количеством скобок
* важность: 2
* 
* Напишите функцию sum, которая бы работала следующим образом:
* 
* sum(1)(2) == 3; // 1 + 2
* sum(1)(2)(3) == 6; // 1 + 2 + 3
* sum(5)(-1)(2) == 6
* sum(6)(-1)(-2)(-3) == 0
* sum(0)(1)(2)(3)(4)(5) == 15
* 
* P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.
*/

const sum = a => {

  let currentSum = a

  const f = b => {
    currentSum += b
    return f
  }

  f.toString = () => currentSum

  return f
}

console.log(sum(1)(2).toString())
console.log(sum(1)(2)(3).toString())
console.log(sum(5)(-1)(2).toString())
console.log(sum(6)(-1)(-2)(-3).toString())
console.log(sum(0)(1)(2)(3)(4)(5).toString())