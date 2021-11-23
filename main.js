// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function math(a,b) {
//     let result = a*b;
//     return result;
// }

// console.log(math(10,5));
//
// function math(a,b) {
//     return a*b;
// }
// console.log(math(10,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function math(r) {
//     return Math.PI*(r*r);
// }
//
// console.log(math(2))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function math(h,r) {
//     return 2*Math.PI*r*(h+r);
// }
//
// console.log(math(10, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let a = [1,2,3,4,5];
//
// function math() {
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i]);
//     }
// }
//
// math();

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraf(text) {
//     document.write(`<p>${text}</p>`)
// }
//
// paragraf('Hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function label(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
//
// label('Text');

// - створити функцію яка створює ul з трьома елементами li.
//     Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function label(text,size) {
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//         const textElement = size[i];
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// label('Hello',10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let a = [1,'string',true];
//
// function b(c) {
//
//     document.write(`<ul>`)
//     for (let i = 0; i < c.length; i++) {
//         document.write(`<li>${c[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// b(a);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.


// let a = [
//     {
//         id: 1,
//         name: 'oleg',
//         age: 17
//     },
//
//     {
//         id: 2,
//         name: 'oleg2',
//         age: 18
//     }
// ]
//
// function array(c) {
//     for (let i = 0; i < c.length; i++) {
//         document.write(`<div>${c[i].id} ${c[i].name} ${c[i].age}</div>`)
//     }
// }
//
// array(a)