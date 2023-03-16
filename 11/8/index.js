/**
 * Перепишите, используя async/await
 * 
 * Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
 * 
 * function loadJson(url) {
 *   return fetch(url)
 *     .then(response => {
 *       if (response.status == 200) {
 *         return response.json();
 *       } else {
 *         throw new Error(response.status);
 *       }
 *     })
 * }
 * 
 * loadJson('no-such-user.json') // (3)
 *   .catch(alert); // Error: 404
 */

const loadJson = async url => {
  const data = await fetch(url)
  if (data.staus == 200) {
    const res = await data.json()
    return res
  }
  throw new Error(data.status);
}

// loadJson('no-such-user.json') // (3)
//   .catch(console.log); // Error: 404


/**
 * Перепишите, используя async/await
 * 
 * Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
 * 
 * В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.
 * 
 * class HttpError extends Error {
 *   constructor(response) {
 *     super(`${response.status} for ${response.url}`);
 *     this.name = 'HttpError';
 *     this.response = response;
 *   }
 * }
 * 
 * function loadJson(url) {
 *   return fetch(url)
 *     .then(response => {
 *       if (response.status == 200) {
 *         return response.json();
 *       } else {
 *         throw new HttpError(response);
 *       }
 *     })
 * }
 * 
 * // Запрашивать логин, пока github не вернёт существующего пользователя.
 * function demoGithubUser() {
 *   let name = prompt("Введите логин?", "iliakan");
 * 
 *   return loadJson(`https://api.github.com/users/${name}`)
 *     .then(user => {
 *       alert(`Полное имя: ${user.name}.`);
 *       return user;
 *     })
 *     .catch(err => {
 *       if (err instanceof HttpError && err.response.status == 404) {
 *         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
 *         return demoGithubUser();
 *       } else {
 *         throw err;
 *       }
 *     });
 * }
 * 
 * demoGithubUser();
 */


class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

const loadJson = async url => {
  const data = await fetch(url)
  if (data.status == 200) {
    const res = await data.json()
    return res
  }
  throw new HttpError(data)
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
const demoGithubUser = async () => {
  let data

  while (true) {

    let name = prompt("login?", "tirex78")

    try {
      data = await loadJson(`https://api.github.com/users/${name}`)
      break
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.")
      } else {
        throw err
      }
    }
  }
  console.log(`Public Repos: ${data.public_repos}.`)
  //return data
}

demoGithubUser();

/**
 * Вызовите async–функцию из "обычной"
 * 
 * Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
 * 
 * async function wait() {
 *   await new Promise(resolve => setTimeout(resolve, 1000));
 *   return 10;
 * }
 * 
 * function f() {
 *   // ...что здесь написать?
 *   // чтобы вызвать wait() и дождаться результата "10" от async–функции
 *   // не забывайте, здесь нельзя использовать "await"
 * }
 * 
 * P.S. Технически задача очень простая, но этот вопрос часто задают разработчики, недавно познакомившиеся с async/await.
 */

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  wait().then(res => console.log(res))
}

f()