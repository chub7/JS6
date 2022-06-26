// 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.

// let str = 'aaa@bbb@ccc';
// const re = /@/g;
// console.log(str.replaceAll(re , `!`));

// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025. 

// let date = new Date(`2025-12-31`);
// console.log(date);

// let date = new Date('2025-12-31'); 
// console.log(date.toLocaleDateString().replace(/\./g,'/'));

// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

// let str = `Я учу javascript!`;
// str.substr(0,1)
// str.substring(0,1) 
// str.slice(0,1)

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

// let arr = [4, 2, 5, 19, 13, 0, 10]

// const qw = function () {
//     sum = 0 ;
//     for ( let i = 0; i < arr.length; i++) {
//        sum += Math.pow(arr[i], 3)

//     }
//     return console.log(Math.sqrt(sum))
// }

// qw();

// 5. Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.


// const retplus = function(a , b) {
//  c = a - b;

//  return console.log(Math.abs(c))
// }
// retplus(3 , 5)

// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).
// let date = new Date();
// const addz = function(){
//  let getDate = date.getDate();
//  let getMonth = (date.getMonth()+ 1);

//  if(getDate < 10) getDate = "0" + getDate;
//  if(getMonth < 10) getMonth = "0" + getMonth;

//     return console.log (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()+ " " + getDate + "." + getMonth + "." + date.getFullYear());
// }
// addz()


// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

// const regexp = /ab{1,}a/g 
// const str = 'aa aba abba abbba abca abea';
// console.log(str.match(regexp));

