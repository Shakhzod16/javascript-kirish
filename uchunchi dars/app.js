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

// Homework

// let massiv = [4, 5, 7, 8, 10];
// let yigindi = 0;
// for (let i = 1; i < massiv.length; i += 2) {
//     yigindi += massiv[i];
// }
// console.log(yigindi);

// 13-masala

// const a = [2, 3, 5, 7, 5, 8];
// let K = 5;
// for(let i = 1; i += 2){
// 	K += a[i]
// }
// console.log(K)

// const massiv = [3, 5, 2, 5, 7, 5, 8];
// const K = 5;
// let count = 0;

// for (let i = 0; i < massiv.length; i++) {
//   if (massiv[i] === K) {
//     count++;
//   }
// }

// console.log(`${K} soni massivda ${count} marta uchradi.`);

// 14-masala

// const massiv = [3, 5, 2, 5, 7, 5, 8];
// const a = [];

// let count = 0;
// const K = 5;

// for (let i = 0; i > massiv.length; i++) {
//     for (b of massiv) {
//         if (b !== K) {
//             a.push(b);
//             console.log(b);
//         }
//     }
// }

// 15-masala

// let a = [1, 2, 3, 4, 5];
// let b = 0;
// for (let i = 0; i < a.length; i++) {
//     b += a[i];
// }
// let c = b / a.length;
// let d = [];
// for (g of a) {
//     if (c < g) {
//         d.push(g);
//     }
// }
// console.log(d);

// 16-masala

// const a = [1, 4, 5, 7, 9, 10, 45];
// let b = [];
// let c = [];
// for (i of a) {
//     if (i % 2 == 0) {
//         c.push(i);
//     }
// }
// console.log(c);
// for (i of a) {
//     if (i % 2) {
//         b.push(i);
//     }
// }
// console.log(b);

// 17-masala

// const massiv = [5, 10, 7, 4];
// let yangiQiymat = [];
// for()

// =======================

// let massiv = [10, 15, 25, 20, 30, 40];

// let farqlar = [];

// for (let i = 0; i < massiv.length - 1; i++) {
//     let farq = massiv[i + 1] - massiv[i];
//     farqlar.push(farq);
// }

// console.log("Massivdagi elementlar orasidagi farqlar:", farqlar);

// 18-masala

// let massiv = [4, 5, 7, 8, 10];
// let yigindi = 0;
// for (let i = 1; i < massiv.length; i += 2) {
//   console.log(yigindi);
// }

//==============

// let a = [-1, 2, 3, -4, 5, -6];
// let b = [];
// let p = 0;
// let o = 0;
// let c = [];
// for (r of a) {
//     if (r < 0) {
//         b.push(r);
//     }
// }
// console.log(b);
// for (g of a) {
//     if (g > 0) {
//         c.push(g);
//     }
// }
// console.log(c);

// 19-masala

// const a = [1, 2, 3, 4, 5, 6, 7];
// let b = [];
// for (let i = a.length - 0; i >= 0; i--) {
//     b.push(i);
//     console.log(i);
// }

// 20-masala

let massiv = [10, 15, 25, 20, 30, 40];

let farqlar = [];

for (let i = 0; i < massiv.length - 1; i++) {
    let farq = massiv[i + 1] - massiv[i];
    farqlar.push(farq);
}

console.log("Massivdagi elementlar orasidagi farqlar:", farqlar);
