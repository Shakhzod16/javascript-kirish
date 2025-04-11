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

