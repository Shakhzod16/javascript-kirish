// let arr = ["I", "go", "home"];

// // delete arr[1]; // удалить "go"
// arr.splice(1, 2); // начиная с индекса 1, удалить 1 элемент

// // console.log(d)

// SPLICE berilgan qiymatni o'chirish uchun ishlatiladi

// < ==================== >

// let arr = ["t", "e", "s", "t"];

// alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)

// alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)

// SLICE bu element bo'yicha berilgan qiymatni olib tashlash uchun ishlatiladi

// < ==================== >

// let b = [3, 4]
// let c = [5, 6]
// let arr = []
// alert( arr.concat(b,c) ); // 1,2,3,4,5,6

// CONCAT bu ikkita qiymatni qo'shish uchun ishlatiladi

// < ==================== >

// let arr = [1, 0, false];

// alert( arr.indexOf(0) ); // 1
// alert( arr.indexOf(false) ); // 2
// alert( arr.indexOf(null) ); // -1

// alert( arr.includes(-1) ); // true

// INDEXOF bu massivdagi qaysi indexda turganini bilish uchun ishlatamiz bu bizga faqat (false va true )qiymat qaytaradi

// < ==================== >

// let fruits = ['Яблоко', 'Апельсин', 'Яблоко']

// alert( fruits.indexOf('Яблоко') ); // 0 (первый 'Яблоко')
// alert( fruits.lastIndexOf('Яблоко') ); // 2 (последний 'Яблоко')

// < ==================== >

// let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
// alert(lengths);

// LENGTH bu biz massivda bergan qiymatni nechta element bor ekanini bilish uchun ishlatamiz va bu massiv ichidagi har bir qiymat bilan ishlaydi

// < ==================== >

// let arr = [ 1, 20, 15,3 ];

// arr.sort();

// alert( arr );

// SORT bu massivda bergan qiymatimizni saralash va tartiblash uchun ishlatiladi ammo (bunda biroz xatoliklar mavjud)

// < ==================== >

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// alert( arr ); // 5,4,3,2,1

// REVERSE bu berilgan massivdagi qiymatini teskari tartibda chiqaradi

// < ==================== >

// let names = 'Вася, Петя, Маша';

// let arr = names.split(', ',1);

// console.log(arr)

// SPLIT bu masivdagi elementlarni biz bergan belgi orqali achratib beradi va unda raqamlar bilan nechinchi qiymatni olishni aytishimiz mumkin

// < ==================== >

// let arr = ['Вася', 'Петя', 'Маша'];

// let str = arr.join(';'); // объединить массив в строку через ;

// alert( str ); // Вася;Петя;Маша

// JOIN bu SPLITga teskari  va birlashtirib berish uchun ishlatiladi

// < ==================== >

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current,5);

// alert(result); // 15

// REDUCE bu massivga bergan qiymatimizni barchasi bilan ishlagan holda hamma qiymatni qo'shib berish uchun ishlatiladi

// MASALALAR

// 1-masala

// const massiv = [1, 3, 5, 7, 9];

// console.log(massiv);

// =================

// let n = parseInt(prompt("n ni kiriting:"));

// let massiv = [];
// let son = 1;

// for (let i = 0; i < n; i++) {
//     massiv.push(son);
//     son += 2;
// }

// console.log("Dastlabki " + n + " ta toq son:", massiv);

// 2-masala

// let n = parseInt(prompt("n ni kiriting:"));

// let massiv = [];
// let son = 1;

// for (let i = 0; i < n; i++) {
//     massiv.push(son);
//     son *= 2;
// }

// console.log("Dastlabki " + n + " ta toq son:", massiv);

// 3-masala

// let n = [];

// let a = prompt("son kiriting:");
// let c = 10;
// let d = 5;

// for (let i = 0; i <= n; i++) {
//     c += d;
//     n.push(c);
// }
// console.log(n);

// ==============

// let c = [];
// let n = prompt("son kiriting: ");
// let a = 10;
// let d = 5;
// for (let i = 0; i <= n; i++) {
//     a += d;
//     c.push(a);
// }
// console.log(c);

// 4-masala

// let c = [];
// let n = prompt("son kiriting: ");
// let a = 10;
// let d = 5;
// for (let i = 0; i <= n; i++) {
//     a *= d;
//     c.push(a);
// }
// console.log(c);

// 5-masala

// let n = prompt("son kiriting: ");

// 6-masala

// let n = prompt("son kiriting: ");

// let arr = [20, 30, 40, 50 ];
// let c = [];
// {
//     if (arr > i) arr.push(c);
//     arr.sort();
// }
// console.log(c);

// ================

// let n = +prompt("Son kiriting:");

// let arr = [20, 10, 50, 40, 80];
// let i = [];

// arr.sort(arr);
// arr.push(i);

// console.log(i);

// ====================

// const arr = [20, 10, 50, 40, 80];

// arr.sort((a, b) => a - b);

// let i = [...arr];

// console.log(i);

// ===================

// let a = [89,77,55,10,7,6]
// let c = 50
// let b = []
// for(let i of a){
//     if(c>i){
//         b.push(i)
//     }
// }
// b.sort()

// console.log(b)

// ===================

// 7-masala

// let arr = ["a", 12, 23, "b"];

// let c = [];
// for (let i of arr) {
//     if (typeof i == `string`) {
//         c.push(i);
//     }
// }

// console.log(c);

// 8-masala

// const a = [12, 12, 3, 5, 5, 8];
// let s = [];
// for (let i of a) {
//     if (a.includes())
// 			s.push(i);
// }
// console.log(s);

// ================

// const a = [12, 12, 3, 5, 5, 8, 11, 11];
// let s = [];

// for (let i of a) {
//     if (a.indexOf(i) === a.lastIndexOf(i)) {
//         s.push(i);
//     }
// }

// console.log(s);

// 9-masala

// let c = +prompt("son kiriting iltimos: ");

// const a = [2, 5, 6, 8, 9, 15];
// let d = 0;
// let j = 0;

// for (let i of a) {
//     if (i > n) {
//         d++;
//         j += i;
//     }
// }
// if (d > 0) {
//     console.log("O‘rtacha:", j / d);
// } else {
//     console.log("Bunday son yo‘q.");
// }
// console.log("Sonlar soni:", d);

// =================

// const a = [12, 15, 8, 20, 3, 25];
// let d = 0;
// let j = 0;

// let n = 10; // Masalan, 10 dan katta sonlarni hisoblash

// for (let i of a) {
//     if (i > n) {
//         d++;      // sonlar soni
//         j += i;   // yig'indisi
//     }
// }

// if (d > 0) {
//     console.log("O‘rtacha:", j / d);
// } else {
//     console.log("Bunday son yo‘q.");
// }
// console.log("Sonlar soni:", d);

