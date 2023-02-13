// task 1
console.log('Скайпро'.toUpperCase())

//task 2
/* 
    const searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог']; 
    const search = 'ко';

    searchStart.forEach((element) => {
    if (element.toLowerCase().includes(search.toLowerCase())) {
            console.log(element);
        };
    });
*/

const searchStart = (arr, str) => {
    let newArr = [];
    arr.forEach((element) => {
        if (element.toLowerCase().startsWith(str.toLowerCase())) {
            newArr.push(element) 
        }
    });
    return newArr;
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

// task 3
const num = 32.58884;
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

console.log(num.toFixed(3));

// task 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));


/* длинная альтернатива
let arr = [52, 53, 49, 77, 21, 32];
let max = Math.max.apply(null, arr);
let min = Math.min.apply(null, arr)
console.log(max, min);
*/

// task 5
function getRandom(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandom(1, 10));

// task 6
const getRandomArrNumbers = (num) => {
    const randomArrNumbers = new Array(Math.floor(num / 2));
    for (let i = 0; i < randomArrNumbers.length; i++) {
        randomArrNumbers[i] = Math.floor(Math.random() * (num + 1));
    }
    console.log(randomArrNumbers);
}
getRandomArrNumbers(7);



//task 7
function getRandom(num1, num2) {
    return Math.round(Math.random() * (num2 - num1)) + num1;
}
console.log(getRandom(5, 15));

// task 8
let date1 = new Date();
console.log(date1);


let date2 = new Date(2023, 1, 13, 14, 8, 4, 0);
console.log(date2); 

// task 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

/* alternative task 9
let currentDate = new Date();
currentDate.setHours(73*24);
console.log(currentDate);
*/

// task 10 
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let myDate = new Date(2025, 05, 14, 17, 27, 55)
let fullDate = myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ', ' + days[myDate.getDay()];

let fullDateTime = myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();

console.log('Дата: ' + fullDate);
console.log('Время: ' + fullDateTime);

// task 10 correct?
/*
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

    const dayOfDate = (year, month, day, hour, min, sec) => {
    month = month - 1;
    let myDate = new Date(year, month, day, hour, min, sec)
    let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

    let fullDateTime = myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();
    console.log(fullDate);
    console.log(fullDateTime);
    }

    dayOfDate(2025, 7, 15, 22, 50, 45)
*/

// task 11

let list = ['Яблоко','Груша','Дыня','Виноград','Персик', 'Апельсин','Мандарин'];
list = list.sort(() => Math.random() - 0.5);
alert(list.join(', '));

let answer = () => {
let question1 = prompt('Чему равнялся первый элемент массива?');
let question2 = prompt('Чему равнялся последний элемент массива?');
  if (question1.toLowerCase() === list[0].toLowerCase() && question2.toLowerCase() === list[list.length - 1].toLowerCase()) {
  alert('Поздравляем, вы угадали оба элемента!')
}  else if (question1.toLowerCase() === list[0].toLowerCase() || question2.toLowerCase() === list[list.length - 1].toLowerCase()) {
  alert ('Вы были близки к победе!');
} else {
  alert ('Неверный ответ')
  }
}
answer()
