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
