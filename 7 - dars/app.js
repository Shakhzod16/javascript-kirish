// let user = {
// 	name: 'John',
// 	age: 30,
// };

// user.id = 1;

// console.log(Object.keys(user)); // bu "object.key" orqali barcha kalitlarni consolga chiqaramiz

// console.log(Object.values(user));// bu "Object.values "orqali barcha qiymatlarni consolga chiqaramiz

// console.log(Object.entries(user));// bu "Object.entries" orqali barcha qiymat va kalitlar chiqaradi consolga chiqaramiz

// console.log(user);

// OBYEKT ga doir masalalar

// ===== 1 - masala =====

// let user = {
// 	name: 'Qudrat',
// 	username: 'Islomov',
// 	age: 21,
// 	cource: '2-kurs',
// };
// console.log(`${user.name} ${user.cource}`);

// ===== 2 - masala =====

// let magazin = [
//     {name: "potatos", narxi: 15,status: true},
//     {name: "apple", narxi: 8,status: false},
//     {name: "SABZI", narxi: 10,status: true}
// ]
// for(let i of magazin){
//     if(i.status === true)
//   console.log(i.name);

// }

// ===== 3 - masala =====

// function CreateOb(marka, model, yili) {
// 	let car = {
// 		marka: marka,
// 		model: model,
// 		yili: yili,
// 	};
// 	console.log(car);
// }

// CreateOb(prompt('marka: '), prompt('model: '), prompt('yili: '));

// ===== 4 - masala =====

// function greet() {
// 	let teacher = { name: 'Bobur', fan: 'dasturlash', Metod: 'hello' };
// 	console.log(`Salom, men ${teacher.name}, ${teacher.fan} fanidan dars beraman`);
// }
// greet();

// ===== 5 - masala =====

// let c = 0;
// let grades = [5, 4, 5, 3, 2, 1];
// let student = {
// 	grades: grades,
// };
// for (let i of student.grades) {
// 	c += i;
// }
// console.log(c / grades.length);

// ===== 6 - masala =====

// let a = [];
// let korxona = [
// 	{ name: 'akobir', lavozimi: 'ishchi', tajribasi: 3 },
// 	{ name: 'bobur', lavozimi: 'suvoqchi', tajribasi: 6 },
// 	{ name: 'sobir', lavozimi: 'derektor', tajribasi: 7 },
// 	{ name: 'arslon', lavozimi: 'ish boshqaruvchi', tajribasi: 4 },
// ];

// for (let i of korxona) {
// 	if (i.tajribasi > 5)
//     a.push(i.name);
// }
// console.log(a);

// ===== 7 - masala =====

// let a = [];
// let phone = [
// 	{ model: 'apple', ishlab_chiqaruvchi: 'al-ibn-temur', narxi: 1000 },
// 	{ model: 'samsung', ishlab_chiqaruvchi: 'al-ibn-temur', narxi: 100 },
// 	{ model: 'redmi', ishlab_chiqaruvchi: 'al-ibn-temur', narxi: 900 },
// ];

// for (let i of phone) {
// 	let chegirma = i.narxi - (i.narxi * 0, 1);

// 	console.log(`${i.model} ${chegirma}`);
// }

// ===== 8 - masala =====

// let Books = [
// 	{ sarlavha: 'molxona', muallif: 'jorge orevel', isAvailable: 'true' },
// 	{ sarlavha: 'toglar ham sado berdi', muallif: 'jorge orevel', isAvailable: 'true' },
// 	{ sarlavha: 'ufq', muallif: 'jorge orevel', isAvailable: 'false' },
// 	{ sarlavha: 'molxona', muallif: 'jorge orevel', isAvailable: 'true' },
// ];

// for (let i of Books) {
// 	if (i.isAvailable === true) {
// 		console.log(`${i.sarlavha} — ${i.muallif}`);
// 	}
// }

// ===== masala =====

// let Books = [
// 	{ sarlavha: 'molxona', muallif: 'jorge orevel', isAvailable: 'true' },
// 	{ sarlavha: 'toglar ham sado berdi', muallif: 'jorge orevel', isAvailable: 'true' },
// 	{ sarlavha: 'ufq', muallif: 'jorge orevel', isAvailable: 'false' },
// 	{ sarlavha: 'molxona', muallif: 'jorge orevel', isAvailable: 'true' },
// ];

// for (let i of Books) {
// 	if (i.isAvailable === 'true') {
// 		console.log(`${i.sarlavha} — ${i.muallif}`);
// 	}
// }

// ===== 9 - masala =====

// function getInfo() {
// 	let foydalanuvchi = [{ nomi: 'Ali', obunachilar_soni: 250000, postlar_soni: 22340 }];
// 	console.log(Object.values(foydalanuvchi));
// }
// getInfo();

// ===== 10 - masala =====

// let sportchi = [
// 	{ name: 'baxodir', sport_turi: 'box', ball: '89' },
// 	{ name: 'ruslan', sport_turi: 'box', ball: '39' },
// 	{ name: 'shaxram', sport_turi: 'box', ball: '79' },
// 	{ name: 'hasanboy', sport_turi: 'box', ball: '90' },
// 	{ name: 'abduqodir', sport_turi: 'box', ball: '82' },
// 	{ name: 'maxmud', sport_turi: 'box', ball: '80' },
// ];

// for (let i of sportchi) {
// 	if (i.ball > 80) console.log(i);
// }

// ===== 11 - masala =====

// Homework

// let ishchilar = [
// 	{ ism: 'sobir', lavozimi: 'suvoqchi', maosh: '9000' },
// 	{ ism: 'firdavs', lavozimi: 'boshliq', maosh: '11000' },
// 	{ ism: 'oktam', lavozimi: 'ish boshqaruvchi', maosh: '2000' },
// 	{ ism: 'ilyos', lavozimi: 'suvoqchi', maosh: '90000' },
// ];

// for (let i of ishchilar) {
// 	console.log(`${i.ism} ,${i.maosh} so'm`);
// }

// ===== 12 - masala =====

// let products = {
// 	phone: 1200,
// 	laptop: 2500,
// 	monitor: 800,
// 	keyboard: 300,
// };
// let engqimmat = [];
// for (let i of products) {
//   if (0 > i)
//     console.log(`$engqimmat`)
// }

// ===== masala =====

// let products = {
// 	phone: 1200,
// 	laptop: 2500,
// 	monitor: 800,
// 	keyboard: 300,
// };

// let a = Object.values(products);

// let maxc = a[0];

// for (let i = 1; i < a.length; i++) {
// 	if (maxc < a[i]) {
// 		maxc = a[i];
// 	}
// }
// console.log(maxc);

// ===== 13 - masala =====

// let c = 0;
// let grades = [5, 4, 5, 3, 2];
// let student = {
// 	grades: grades,
// };
// for (let i of student.grades) {
// 	c += i;
// }
// console.log(c / grades.length);

// ===== 14 - masala =====

// let xodimlar = [
// 	{ name: 'islom', lavozimi: 'manager' },
// 	{ name: 'dilbek', lavozimi: 'manager' },
// 	{ name: 'shoxrux', lavozimi: 'ishchi' },
// 	{ name: 'ozod', lavozimi: 'derektor' },
// ];
// for (let i of xodimlar) {
//   if (i.lavozimi == 'manager')
//     console.log(i)
// }

// ===== 16 - masala =====

