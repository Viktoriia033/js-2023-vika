// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let names = ["vika","olya","misha","sonya","igor","masha","serg","inna","katya","emma"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);
// console.log(names[5]);
// console.log(names[6]);
// console.log(names[7]);
// console.log(names[8]);
// console.log(names[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let describeBooksFirst = {
//     title: "Sun",
//     pageCount: 100,
//     genre: "novel"
// };
// let describeBooksSecond = {
//     title: "Moon",
//     pageCount: 200,
//     genre: "poem"
// };
// let describeBooksThird = {
//     title: "Night",
//     pageCount: 300,
//     genre: "detective"
// };

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let describeBooksFirst = {
//     title: "Sun",
//     pageCount: 100,
//     genre: "detective",
//     authors: [
//         {
//             name: 'Igor',
//             age: 40
//         }
//     ]
// };
//
// let describeBooksSecond = {
//     title: "Moon",
//     pageCount: 200,
//     genre: "detective",
//     authors: [
//         {
//             name: 'Masha',
//             age: 25
//         }
//     ]
// };
// let describeBooksThird = {
//     title: "Night",
//     pageCount: 300,
//     genre: "detective",
//     authors: [
//         {
//             name: 'Vika',
//             age: 19
//         }
//     ]
// };

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let users = [
//     {name: "vika",username: "vika_qqq",password: 100 },
//     {name: "vasya",username: "vasya_eee",password: 101 },
//     {name: "vitya",username: "vitya_uuu",password: 102 },
//     {name: "viktor",username: "viktor_lll",password: 103 },
//     {name: "vitalina",username: "vitalina_mmm",password: 104 },
//     {name: "petya",username: "petya_jjj",password: 105 },
//     {name: "igor",username: "igor_ggg",password: 106 },
//     {name: "emma",username: "emma_aaa",password: 107 },
//     {name: "nina",username: "nina_fff",password: 108 },
//     {name: "anton",username: "anton_zzz",password: 109 },
//     {name: "inna",username: "inna_ppp",password: 110 },
// ];
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);

//Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     let x = +prompt(12);
// if (x !=== 0) {
//     console.log("Virno");
// } else {
//     console.log("Nevirno");
// }

// Перевірте  скрипт при a, що дорівнює 1, 0, -3!!!
//  let a = +prompt(1);
// if (a === 1) {
//         console.log("Virno");
// } else if (a === 0) {
//         console.log("Nevirno");
// } else if (a === -3) {
//         console.log("Nevirno");
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = prompt("Введіть час!");
// if (time <= 15) {
//     console.log('Перша чверть');
// } else if (time <= 30) {
//     console.log("Друга чверть");
// } else if (time <= 45) {
//     console.log("Третя чверть");
// } else if (time <= 60) {
//     console.log("Четверта чверть");
// } else {
//     console.log("Введіть число від 0 до 59");
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = prompt("Enter your day");
// if (day <= 11) {
//     console.log("Перша декада");
// } else if (day <= 21) {
//     console.log("Друга декада");
// } else if (day <= 31) {
//     console.log("Третя декада");
// } else {
//     console.log("Введіть число від 1 до 31");
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = prompt("Enter number of day");
//  switch (day) {
//      case "1" :
//          console.log("Monday");
//          break;
//      case "2" :
//          console.log("Tuesday");
//          break;
//      case "3" :
//          console.log("Wednesday");
//          break;
//      case "4" :
//          console.log("Thursday");
//          break;
//      case "5" :
//          console.log("Friday");
//          break;
//      case "6" :
//          console.log("Saturday");
//          break;
//      case "7" :
//          console.log("Sunday");
//          break;
//      default:
//          console.log('Enter number 1-7');
//  }

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
// let numberOne = +prompt("Enter your first number");
// let numberTwo = +prompt("Enter your second number");
// if (numberOne > numberTwo || numberOne < numberTwo ) {
//     // console.log();   виникло питання з виведенням максимального числа;
// } else if (numberOne === numberTwo) {
//     console.log("Eror");
// }


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let x = "hello";
// if (x || false) {
//     console.log("default");
// }


// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0] ) {
//     console.log(coursesAndDurationArray[0].monthDuration);
// } else if (coursesAndDurationArray[1] > 5) {
//     console.log(coursesAndDurationArray[1].monthDuration);
//     console.log('Super');
// } else if (coursesAndDurationArray[2] > 5) {
//     console.log(coursesAndDurationArray[2].monthDuration);
//     console.log('Super');
// }else if (coursesAndDurationArray[3] > 5) {
//     console.log(coursesAndDurationArray[3].monthDuration);
//     console.log('Super');
// }else if (coursesAndDurationArray[4]) {
//     console.log(coursesAndDurationArray[4].monthDuration);
// }
