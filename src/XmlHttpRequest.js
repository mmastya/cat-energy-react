/* let xhrPromise = new Promise(function(resolve, reject) {
  let xhr = new XMLHttpRequest();
  console.log("это происходит до отправки запроса", new Date().getTime());

  xhr.open("GET", "http://127.0.0.1:4010/pets");

  xhr.send();
  console.log("это происходит после отправки запроса", new Date().getTime());

  xhr.onload = function() {
    console.log(
      "это происходит когда получен какой-либо ответ",
      new Date().getTime()
    );

    let responseObj = xhr.response;
    resolve(responseObj);
  };
  console.log("ответ с сервера получен", new Date().getTime());
});

let then = xhrPromise.then(
  result => console.log("resolve", result), 
  error => console.log("reject", error) 
);
console.log(then);
                       
xhrPromise.catch(
    error => console.log("reject", error)
);

xhrPromise.finally(
    () => console.log("resolve") 
  );

 */

// spread  оператор для декларации и вызова функции.
/* function f(x, y, z, ...a) {
    console.log(x,y,z,a);

    return x + y + z;
}

function fMin(numbers) {
  return Math.min(...numbers);
}

console.log(fMin([1,2,7,42,675,1,0,-399]));
console.log(fMin([1,2,7,42,-39]));
console.log(fMin([1,2,7,42,675,1,0,234,23,4]));

const numbers= [1,2,3,4,5,6];

f(1,2, ...numbers);
f(1,2,1,2,3,4,5,6);
 */

/*// spread оператор для создания объекта.

    const student = {name: "Dima", age: "28", major:"programming"};
    const teacher = {name:"Oleg", age: "50", subject: "math"};

    console.log(Object.assign({},student,teacher));
    console.log({...student, ...teacher});

    // spread оператор для создания массивов.

     const pets = ['cat', 'dog', 'bird', 'fish'];
     const numbers = [1,2,3,4,5,6];

     console.log([...pets, ...numbers]);

// диструктуризация для массивов.
     const [a,b,c,d] = ['cat', 'dog', 'bird', 'fish'];
        /* const a = animals[0];
        const b = animals[1];
        const c = animals[2];
        const d = animals[3]; 
        console.log(a,b,c,d);

    const [z, ...other] = ['cat', 'dog', 'bird', 'fish'];
    
    console.log(z, other);
    const [v,, ...other2] = ['cat', 'dog', 'bird', 'fish'];
    
    console.log(v, other2);
    console.log([v, ...other2]);*/

//диструктуризация для объектов.
/*
function HeaderComponent ({name, test, ...other}) {
    console.log(name, test, other);

    console.log({test, ...other});
}

const obj  = { name: "Dima", age: 28, test: { house: 22 }, superAge: 555};

const {name, ...other} = obj;

console.log(name, other);

HeaderComponent(obj);

const name = obj.name;
const age = obj.age;
const test = obj.test;
const house = obj.test.house; */

//obect.assign

/*var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3, j: 5, g:44 };
var o4 = { a: 4 };
var o5 = { b: 5 };
var o6 = { c: 6, data: { test: 100, test2: 200 } };
var o7 = { a: 7 };
var o8 = { b: 8, data: { test: 300 } };
var o9 = { c: 9, g:55 };

var obj = Object.assign({}, o1, o2, o3, o4, o5, o6, o7, o8, o9);

const test2 = {...o1, ...o2, ...o3, ...o4, ...o5, ...o6, ...o7, ...o8, ...o9};

console.log("Полученный: ", obj);
console.log("Целевой: ", o1); 
console.log(obj === o1);

const target = { j: 1 };

for(let key in o3) {
  if(o3.hasOwnProperty(key)){
    target[key] = o3[key]
  }
}

console.log(target);

console.log("test2", JSON.stringify(test2, null, 2));

//   Методы массивов
// Добавление/удаление элементов
let arr = ['hello', 'world', 'my', 'name'];
console.log(arr.push('is', 'Nastya')); // добавляет элементы в конец
arr.pop()// извлекает элемент из конца,
arr.shift() //извлекает элемент из начала,
arr.unshift('is', 'Nastya') //добавляет элементы в начало.

// splice
//arr.splice(index[, deleteCount, elem1, ..., elemN])

// slice
//arr.slice([start], [end])
//let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (копирует с 1 по 3)

alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)

// concat
//arr.concat(arg1, arg2...)
//let arr = [1, 2];

// создать массив из: arr и [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// создать массив из: arr и [3,4] и [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// создать массив из: arr и [3,4], потом добавить значения 5 и 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

//Перебор: forEach
//Метод arr.forEach позволяет запускать функцию для каждого элемента массива.
arr.forEach(function(item, index, array) {
  // ... делать что-то с item
});

// Поиск в массиве 
//  arr.indexOf(item, from) //ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
//  arr.lastIndexOf(item, from) //– то же самое, но ищет справа налево.
 // arr.includes(item, from) //– ищет item, начиная с индекса from, и возвращает true, если поиск успешен.

// find и findIndex
//let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
//});
//Функция вызывается по очереди для каждого элемента массива:
//item – очередной элемент.
//index – его индекс.
//array – сам массив.

//filter 
//let results = arr.filter(function(item, index, array) {
  // если true - элемент добавляется к результату, и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
//});
let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2

// map 
//let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
//});

// sort(fn)
//let arr = [ 1, 2, 15 ];

// метод сортирует содержимое arr
arr.sort();

alert( arr );  // 1, 15, 2

//reverse
//let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1

// split и join*/


