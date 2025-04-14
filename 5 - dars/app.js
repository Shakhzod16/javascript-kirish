// Massivga doir masalsalar

// const a = [2, 3, 5, 7, 1, 23];
// let b = [];
// for (let i of a) {
//     if (i * 2 >= 10) b.push(i);
// }
// console.log(b);

// < ========== >

// const a = [2, 3, 5, 7, 1, 10, 23];
// let b = [];

// for (let i of a) {
//     if (i < 10) {
//         b.push(i * 2);
//     }
// }

// console.log(b);

// < ========== >

// const a = [20,15,10,50]
// const b = []
// for(g of a){

// }
// for(let i = 0;i < a.length;i++){
//     const num = a[i];
//     if(num % 2 ===0){
//         const c = num*num
//         if(c<100){
//             b.push(c)
//         }
//         console.log(b)
//     }
// }
// console.log(b)

// Masala

// const massiv = [1, 2, 7, 4, 9, 17, 22];
// let a = [];
// for (let i = 2; i <= Math.sqrt(a); i++) {
//     if (massiv % i === 0) a.push(massiv);
// }
// console.log(a);

// < ========== >

// let a = [0, 10, 3, 4, 7];
// let b = [0, 15, 8, 4, 17];
// let c = [];
// for (let i of a) {
//     if (b.includes(i)) {
//         c.push(i);
//     }
// }

// console.log(i);

// Masala

// < ========== >

// let a = [0, 10, 3, 4, 7];
// let b = [0, 15, 8, 4, 17];
// let c = [];

// for (let i of a) {
//     if (b.includes(i)) {
//         c.push(i);
//     }
// }

// console.log(c);

// Masala

// let  a = [1,2,3,4,5]
// let b = 0
// for(let i = 0;i<a.length;i++){
//     b+=a[i]
// }
// let c = b/a.length
// let d = []
// for(g of a){
//     if(c<g){
//         d.push(g)
//     }
// }
// console.log(d)

// < ========== >

// const massiv = [4, -5, 7, 6, -8, -29];
// let a = [];
// let b = [];
// for (let i of massiv) {
//     i =i*2
//     if (i > 0) {
//         a.push(i);
//     } else if (i < 0) {
//         b.push(i);
//     }
// }
// console.log(a);

// console.log(b)

// < ========== >

// for (let c of massiv) {
//     if (massiv < 0) {
//         b.push(massiv);
//     }
// }
// console.log(b);

// Masala

// let a = [];
// let i = 0;
// while (b < 5) {
//     i++;
//     let b = +prompt();
//     b.push(a);
// }
// console.log(b.sort()[b.length - 1]);

// < ========== >

// let c = [];
// for (let i = 0; i < 5; i++) {
//     let a = +prompt("son");
//     if (c.length == 0) {
//         c.push(a);
//     } else if (c[0] < a) {
//         c[0] = a;
//     }
// }
// console.log(c[0]);

// < ========== >

// let qiymat = [];

// for (let i = 0; i < 5; i++) {
//     let qiymatlar = +prompt(`Iltimos, ${i + 1}- Qiymatni Kiririting`);
//     if (isNaN(qiymatlar)) {
//         alert("Raqam Kiriting");
//         i--;
//         continue;
//     }
//     qiymat.push(qiymatlar);
// }

// console.log(qiymat);
// console.log(Math.max(...qiymat));

// < ========== >

// FUNKSIYA

// 1-masala

// function MaxNumber(c = []) {
//     for (let i = 0; i < 5; i++) {
//         let a = +prompt("son: ");
//         if (c.length == 0) {
//             c.push(a);
//         } else if (c[0] < a) {
//             c[0] = a;
//         }
//     }

//     console.log(c[0]);
// }

// 2-masala

// function NumMax(c = []){


// const a = [2, 3, 5, 7, 1, 23];
// let b = [];
// for (let i of a) {
//     if (i * 2 >= 10) b.push(i);
// }
// console.log(c=[0]);
// }
// NumMax=()

// < ========== >


function NumMax() {
	const a = [2, 3, 5, 7, 1, 23];
	let b = [];

	for (let i of a) {
			if (i * 2 >= 10) {
					b.push(i);
			}
	}

	console.log(b); // Natija: [5, 7, 23]
}

NumMax();
