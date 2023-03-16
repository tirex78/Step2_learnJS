/**
 * Можно ли "перевыполнить" промис?
 *
 * Что выведет код ниже?
 *
 * let promise = new Promise(function(resolve, reject) {
 *   resolve(1);
 *
 *   setTimeout(() => resolve(2), 1000);
 * });
 *
 * promise.then(alert);
 */

// состояние промиса меняется только один раз, выведет 1

/**
 * Задержка на промисах
 * 
 * Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
 * 
 * Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, 
 * так чтобы мы могли добавить к нему .then:
 * 
 * function delay(ms) {
 *   // ваш код
 * }
 * 
 * delay(3000).then(() => alert('выполнилось через 3 секунды'));
 */

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

//delay(3000).then(() => console.log('выполнилось через 3 секунды'));

/**
 * Анимация круга с помощью промиса
 * 
 * Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, 
 * чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.
 * 
 * Новое использование:
 * 
 * showCircle(150, 150, 100).then(div => {
 *   div.classList.add('message-ball');
 *   div.append("Hello, world!");
 * });
 * 
 * Возьмите решение из Анимация круга с помощью колбэка в качестве основы.
 */
//--------

// function showCircle(cx, cy, radius, callback) {
//   let div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + 'px';
//   div.style.top = cy + 'px';
//   div.className = 'circle';
//   document.body.append(div);

//   setTimeout(() => {
//     div.style.width = radius * 2 + 'px';
//     div.style.height = radius * 2 + 'px';

//     div.addEventListener('transitionend', function handler() {
//       div.removeEventListener('transitionend', handler);
//       callback(div);
//     });
//   }, 0);
// }

// showCircle(150, 150, 100, div => {
//   div.classList.add('message-ball');
//   div.append("Hello, world!");
// });
//------

const showCircle = (cx, cy, radius) => {


  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise(resolve => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    }, 0);
  })
}

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});