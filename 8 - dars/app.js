// ===== 1 - masala =====


// function capitalizeWords(sentence) {
//     return sentence
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
// }


// console.log(capitalizeWords('hello word dkjsd dsgdsg'))

// ===== 2 - masala =====

// let text = "hello world hello uzb";


// let countWordOccurrences = new Function("text", `
//   let words = text.split(" ");
//   let wordCount = {};

//   words.forEach(function(word) {
//     wordCount[word] = (wordCount[word] || 0) + 1;
//   });

//   return wordCount;
// `);


// let result = countWordOccurrences(text);
// console.log(result);

// ===== 3 - masala =====




let numbers = [11, 2, 33, 33, 4];

let removeDuplicates = new Function("arr", `
  let counts = {}; 
  let result = [];  
  
 
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1; 
  }

  
  for (let num in counts) {
    if (counts[num] !== 2) {  
      result.push(parseInt(num)); 
    }
  }
  
  return result;
`);

let result = removeDuplicates(numbers);
console.log(result);

