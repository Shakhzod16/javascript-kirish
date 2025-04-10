// let fruits = ["Яблоко", "Апельсин", "Слива"];
// // fruits.pop()
// // fruits.push('banan',878)
// // fruits.shift()
// // fruits.unshift('sdfhg',5)

// // console.log(fruits.length)

// console.log(fruits)

// let arr = ["Яблоко", "Апельсин", "Груша"];

// for (let i = 0; i < arr.length; i++) {
//   alert( arr[i] );
// }

// let fruits = ["Яблоко", "Апельсин", "Слива"];

// for (let fruit of fruits) {
//   alert( fruit );
// }

// let a = ["Яблоко", "Апельсин", "Груша"];

// for (let key in a) {
//   alert( a[key] ); // Яблоко, Апельсин, Груша
// }

// let arr = [1, 2, 3, 4, 5];

// arr.length = 2; // укорачиваем до двух элементов
// alert( arr ); // [1, 2]

// arr.length = 5; // возвращаем length как было
// alert( arr[3] ); // undefined: значения не восстановились

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];

// alert( matrix[2][1] );

// let arr = [1, 2, 3, 4, 5];
// for (let i in arr){
//     let a = String(arr[i])
//     console.log(typeof(a))
// }

// 1-masala

// let massiv = [1, 2, 3, 4, -5, -7];
// let k = 0;
// for (let i of massiv) {
//     if (i > 0) {
//         console.log(i);
//         k += i;
//     }
// }
// console.log(k)

// 2-masala

// let a = [1, 2, 3, 4, 6, 8, 9];

// for (let i of a) {
//     // console.log(i);

//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// 3-masala

// let massiv = [120, 3, -2, 15, 7, 10, 5, 121, -1, 65, 105];
// let engKatta = massiv[0];

// for (let i = 1; i < massiv.length; i++) {
//     if (massiv[i] > engKatta) {
//         engKatta = massiv[i];
//     }
// }
// console.log("Massivdagi eng katta element:", engKatta);

// 4-masala

// let a = [1, 3, 5, 6, 8, 9];
// let b = [];
// for (let i of a) {
//     b.push(i * 2);
// 		console.log(b);
// }

// 5-masala

// let a = [1, 2, 3, 4, 5];
// // let b = [];
// for (let i = a.length - 0; i >= 0; i--) {
//     console.log(i);
// }

// 6-masala

// let a = [1, 3, 5, 6, 8, 9];
// let b = [];
// for (let i of a) {
//     b.push(i ** 2);
// 		console.log(b);
// }

// 7-masala

// let a = [1, 5, 10, 34, 55];
// for (let i of a) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
// }

// 8-masala

// let a = [12, 8, 23, 3, 4, 5];
// for (let i in a) {
//     console.log(i);
// }

// 9-masala

// let c = [];
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// for (let i = 0; i < a.length; i++) {
//     c.push(a[i] + b[i]);
// }

// console.log(c);

// 10-masala

// let a = +prompt("son kiriting:");
// let b = [1, 30, 50, 70, 100, 200];
// for (let i of b) {
//     if (a < i) console.log(i);
// }

// 11-masala

// let massiv = [120, 3, -2, 15, 7, 10, 5, 8, -1, 65, 105];
// let engKichik = massiv[0];

// for (let i = 1; i < massiv.length; i++) {
//     if (massiv[i] < engKichik) {
//         engKichik = massiv[i];
//     }
// }
// console.log("Massivdagi eng kichik element:", engKichik);


// 12-masala

