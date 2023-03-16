/**
 * Изменяем "prototype"
 * важность: 5
 * 
 * В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
 * 
 * Сначала у нас есть такой код:
 * 
 * function Rabbit() {}
 * Rabbit.prototype = {
 *   eats: true
 * };
 * 
 * let rabbit = new Rabbit();
 * 
 * alert( rabbit.eats ); // true
 * 
 *     Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?
 * 
 * function Rabbit() {}
 * Rabbit.prototype = {
 *   eats: true
 * };
 * 
 * let rabbit = new Rabbit();
 * 
 * Rabbit.prototype = {};
 * 
 * alert( rabbit.eats ); // ? true
 * 
 * …А если код такой (заменили одну строчку)?
 * 
 * function Rabbit() {}
 * Rabbit.prototype = {
 *   eats: true
 * };
 * 
 * let rabbit = new Rabbit();
 * 
 * Rabbit.prototype.eats = false;
 * 
 * alert( rabbit.eats ); // ? true
 * 
 * Или такой (заменили одну строчку)?
 * 
 * function Rabbit() {}
 * Rabbit.prototype = {
 *   eats: true
 * };
 * 
 * let rabbit = new Rabbit();
 * 
 * delete rabbit.eats;
 * 
 * alert( rabbit.eats ); // ? true
 * 
 * Или, наконец, такой:
 * 
 * function Rabbit() {}
 * Rabbit.prototype = {
 *   eats: true
 * };
 * 
 * let rabbit = new Rabbit();
 * 
 * delete Rabbit.prototype.eats;
 * 
 * alert( rabbit.eats ); // ? undefined
 */
// true true true undefined

/**
 * Создайте новый объект с помощью уже существующего
 * важность: 5
 * 
 * Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, 
 * но хотелось бы создать ещё один объект такого же типа.
 * 
 * Можем ли мы сделать так?
 * 
 * let obj2 = new obj.constructor();
 * 
 * Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. 
 * И пример функции-конструктора, с которой такой код поведёт себя неправильно.
 */

function Obj(name) {
  this.name = name;
}


let obj = new Obj('1.X')
let obj2 = new obj.constructor('1.Y');

console.log(obj.name);
console.log(obj2.name);



function Obj2(name) {
  this.name = name;
}

Obj2.prototype = {}

let obj_ = new Obj2('2.X')
let obj_2 = new obj_.constructor('2.Y');

console.log(obj_2.name);