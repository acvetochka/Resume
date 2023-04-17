// // function formatMessage(message, maxLength) {
// //   let result;
// //   // Change code below this line
// // if(message <= maxLength) {
// //   result = message;
// // }
// //   else {
// //     result = message.slice(0, maxLength) + "...";
// //   }
// //   /// Change code above this line
// //   return result;
// // }

// // formatMessage("Curabitur ligula sapien", 16);

// // Change code below this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// const calculateTotalBalance = users => {
//   const totalBalance = users.reduce((total, user) => {
//       return total + user.balance;
//   }, 0);
//       console.log(totalBalance);
// };

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((firstBook, secondBook) => firstBook.localeCompare(secondBook));
// console.log(names);
// // return names;

// class StringBuilder {
//   constructor (initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }

// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// function calculateTotal(number) {
//   // Change code below this line
//       let sum = 0;
//     for (let i = 1; i <= number; i += 1) { // Change this line
//         sum += i;
//         console.log(i);
//         // console.log(sum);
//  }
//      console.log(sum);
//    return sum;
//    // Change code above this line
//  }

//  calculateTotal(3);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
// let valueArray = []
//   // Change code below this line
//     for (const product of products) {
//         if (!(product[propName])) {
//           console.log(product[propName]);
//           valueArray.push(product[propName]);
//           // console.log(valueArray);
//         }

//   }
// console.log(valueArray);
//   return valueArray;
//   // Change code above this line
// }

// getAllPropValues('quantity');
// getAllPropValues('name');
// getAllPropValues('quant');

// function slugify(title) {
//   // Change code below this line
//   // let words = title.split(" ");
// //   words = words.join("-");

//   const words = title.toLowerCase().replaceAll(" ", "-");
//   console.log(words);
//   return words;

// // return words.toLowerCase();
//   // Change code above this line
// }

// slugify('Arrays for begginers');
// slugify('English for developer');

// const mySet = new Set([1, 2, 1, 4, 3, 2]);
// const result = [...mySet];
// console.log(result);

// function highAndLow(numbers) {
//   const arr = numbers.split(" ").sort((a, b) => b - a);
//   console.log(arr);
//   return `${arr[0]} ${arr[arr.length - 1]}`;
//   // ...
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
// console.log(highAndLow("1 2 3"));

// function printerError(s) {
//   const totalErr = s.replace(/[a-m]/g, "").length;
//   return `${totalErr}/${s.length}`;
// }

// function printerError(s) {
//   // your code
//   var count = 0;
//   for (var i = 0; i < s.length; i++) {
//     if (s[i] > "m") {
//       count++;
//     }
//   }
//   return count + "/" + s.length;
// }
// console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));

// function getMiddle(s) {
//   const idx = Math.floor(s.length / 2);

//   if (s.length % 2) {
//     return s[idx];
//   }
//   return `${s[idx - 1]}${s[idx]}`;
// }

// function rowSumOddNumbers(n) {
//   if (n === 1) {
//     return 1;
//   }

//   let total = 0;
//   let countEl = 1;
//   let el = 1;
//   for (let i = 1; i < n; i += 1) {
//     countEl += 1;
//     for (let i = 0; i < countEl; i += 1) {
//       el += 2;
//       if (n === countEl) {
//         total += el;
//       }
//     }
//   }
//   return total;
// }

// console.log(rowSumOddNumbers(1)); // 1
// console.log(rowSumOddNumbers(2)); // 3 + 5 = 8
// console.log(rowSumOddNumbers(3)); // 7 + 9 + 11 = 27

// function removeSmallest(numbers) {
//   const arr = [];
//   const min = numbers.indexOf(Math.min(...numbers));
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (i !== min) {
//       arr.push(numbers[i]);
//     }
//   }
//   return arr;
// }

// removeSmallest([1, 2, 3, 4, 5]);
// removeSmallest([5, 3, 2, 1, 4]);
// removeSmallest([2, 2, 1, 2, 1]);
// removeSmallest([]);

// function accum(s) {
//   const arr = s.toUpperCase().split("");
//   for (let i = 0; i < s.length; i += 1) {
//     arr[i] += arr[i].toLowerCase().repeat(i);
//     console.log(arr[i]);
//   }
//   console.log(arr);
//   return arr.join("-");
//   // your code
// }
// console.log(accum("ZpglnRxqenU"));

// function firstNonConsecutive(arr) {
//   const arrRed = arr.reduce((a, b) => {
//     // b - a !== 1 ? (a = b) : a + 1;
//     if (b - a !== 1) {
//       a = b;
//       break;
//     }
//     return a + 1;
//   }, 0);
//   return arrRed;
// }

// function firstNonConsecutive(arr) {
//   const arrRed = arr.findIndex((item, idx, arr) => arr[idx + 1] - item !== 1);
//   //   console.log(arrRed + 1);
//   if (!~arrRed || arrRed === undefined) {
//     return null;
//   }
//   return arr[arrRed + 1] || null;
// }

// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     if (arr[i + 1] - arr[i] !== 1) {
//       return arr[i + 1];
//     }
//     return null;
//   }
// const arrRed = arr.findIndex((item, idx, arr) => arr[idx + 1] - item !== 1);
// //   console.log(arrRed + 1);
// if (!~arrRed || arrRed === undefined) {
//   return null;
// }
// return arr[arrRed + 1] || null;
// }

// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     if (arr[i + 1] - arr[i] !== 1) {
//       return arr[i + 1];
//     }
//   }
//   return null;
// }

// // const firstNonConsecutive = (arr) => arr[arr.findIndex((item, idx, arr) => arr[idx + 1] - item !== 1) + 1];
// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
// console.log(firstNonConsecutive([4, 7, 8]));
// console.log(firstNonConsecutive([-1, 0, 3]));
// console.log(firstNonConsecutive([1, 2]));

// function filter_list(l) {
//   const filt = l.filter((item) => typeof item === "number");
//   return filt;

//   // Return a new array with the strings filtered out
// }

// // filter_list([1, 2, "a", "b"]);
// console.log(filter_list([1, 2, "a", "b"]));

// let arr = [1, 3, 4, 1, 1, 3, 4, 5];
// let count = {};

// for (let elem of arr) {
//   if (count[elem] === undefined) {
//     count[elem] = 1;
//   } else {
//     count[elem]++;
//   }
// }

// function findOdd(arr) {
//   const total = {};

//   for (const item of arr) {
//     if (!total[item]) {
//       total[item] = 1;
//     } else {
//       total[item] += 1;
//     }
//   }
//   console.log(total);
//   //   return total;
//   const keys = Object.keys(total);
//   console.log(keys);
//   for (const key of keys) {
//     if (total[key] % 2) {
//       console.log(key);
//       return key;
//     }
//   }

//   // A.filter(item => )
//   // return 0;
// }

// function findOdd(arr) {
//     const total = {};

//     for (const item of arr) {
//       !total[item] ? total[item] = 1 : total[item] +=1}

//     const keys = Object.keys(total);
//     for (const key of keys) {
//       if (total[key] % 2) {
//         return Number(key);
//       }
//     }
//   }

// findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
// findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);
// findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]);

//    tribonacci([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//    tribonacci([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//    tribonacci([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//    tribonacci([10], 10);
//    tribonacci([1,1,1,1,1,1,10,1,1,1,1], 10);
//    tribonacci([5,4,3,2,1,5,4,3,2,10,10], 1);

// function validatePIN(pin) {
//   if (pin.length === 4 || pin.length === 6) {
//     if (pin) {
//       console.log(Number(pin));
//       return true;
//     }
//   }
//   return false;
//   //return true or false
// }

// function validatePIN(pin) {
//   const arr = [...pin.matchAll(/[0-9]/g)];
//   //   console.log(arr);
//   //   console.log(pin.length);
//   //   console.log(arr.length);
//   if (pin.length === 4 || pin.length === 6) {
//     if (pin.length === arr.length) {
//       return true;
//     }
//   }
//   return false;
//   //return true or false
// }

/* for my future referencing,

  ^ = start of a line, 
  \d = [0-9], {4} specifies 4 digits, 
  {6} specifies 6 digits, $ - end of a line
  
  first alternative ^\d{4}$ - equivalent to [0-9], matches exactly 4 digits.
  second alternative ^\d{6}$ - "", matches previous token exactly 6 digits.
  
   use RegEx .test to search for these characters stored.
   
*/

// const validatePIN = (pin) => /^\d{4}$|^\d{6}$/.test(pin);

// validatePIN("-1.234");
// console.log(validatePIN("-1.234"));
// validatePIN("123456");
// console.log(validatePIN("123456"));
// validatePIN("w34");
// console.log(validatePIN("w34"));
// validatePIN("1234");
// console.log(validatePIN("1234"));

// const number = (busStops) => {
//   let input = 0;
//   let output = 0;
//   for (const stop of busStops) {
//     input += stop[0];
//     output += stop[1];
//   }
//   return input - output;
// };

// const number = (busStops) => {
//   let total = 0;
//   for (const stop of busStops) {
//     total += stop[0];
//     total -= stop[1];
//   }
//   return total;
// };

// const number = busStops => busStops.reduce((n, [on, off]) => n + on - off, 0);

// function longestConsec(strarr, k) {
//   //   const red = strarr.reduce((a, item) => a + item, strarr[0]);
//   //   console.log(red);

//   const arr = [];
//   for (let idx = 0; idx < strarr.length; idx += 1) {
//     let idx1 = idx;
//     // console.log(idx);
//     let newWord = "";
//     for (let i = 0; i < k; i += 1) {
//       newWord += strarr[idx1];
//       //   console.log(newWord);
//       idx1 += 1;
//       if (idx1 > strarr.length - 1) {
//         break;
//       }
//       //   console.log(strarr[idx]);
//     }
//     arr.push(newWord);
//   }
//   const longWord = arr.reduce((acc, item) => (acc.length > item.length ? acc : item), "");
//   console.log(arr);
//   console.log(longWord);
//   return longWord;
//   //   return strarr.indexOf(strarr.reduce((a, item) => a + item, strarr[0]));
//   //   for (let i = 0; i<=k; i+=1) {

//   // })
//   // your code
// }

// // function longestConsec(strarr, k) {
// //   if (strarr.length == 0 || k > strarr.length || k <= 0) return "";
// //   let longStr = "";
// //   let newStr = "";

// //   for (let i = 0; i < strarr.length; i++) {
// //     newStr = strarr.slice(i, i + k);
// //     console.log(newStr);
// //     if (newStr.join("").length > longStr.length) {
// //       longStr = newStr.join("");
// //     }
// //   }
// //   console.log(longStr);
// //   return longStr;
// // }

// longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck", "hjjkkk"], 3);
// // console.log(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));
// // console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2);

// console.log(typeof ({} + [] + {} + [1]));

// function high(x) {
//   const arrs = x.split(" ");
//   console.log(arrs);
//   const arrTotal = [];
//   for (const arr of arrs) {
//     //     arr.split("");
//     //     console.log(arr.split(""));
//     //   }
//     // масив, в який записується сума кожного слова
//     // const arrItem = [arr];
//     let totalChar = 0; // змінна, що зберігає суму літер кожного слова
//     for (let i = 0; i < arr.length; i += 1) {
//       console.log(i);
//       let charCode = arr.codePointAt(i) - 96; // зберігає юнікод літери
//       console.log(charCode);
//       totalChar += charCode;
//     }
//     console.log(" ");
//     arrTotal.push(totalChar);
//     // arrItem.push(totalChar);
//     // arrTotal.push(arrItem);
//   }
//   console.log(arrTotal);
//   const reduce = arrTotal.indexOf(arrTotal.reduce((acc, item) => (acc >= item ? acc : item), 0));
//   console.log(arrs[reduce]);
//   console.log(reduce);
//   return arrs[reduce];
// }
// high("manfhjfjjfkfk i need a taxi up to ubud");
// high("what time are we climbing up the volcano");

// function towerBuilder(nFloors) {
//   const length = nFloors * 2 - 1;
//   const arr = [];
//   arr[0] = "*".repeat(length);
//   for (let i = 1; i < nFloors; i += 1) {
//     let el = " ".repeat(i) + "*".repeat(length - 2 * i) + " ".repeat(i);
//     arr.push(el);
//   }
//   return arr.reverse();
// }

// console.log(towerBuilder(6));

// function sumArray(array) {
//   const sortArr = array.sort((a, b) => a - b);
//   sortArr.pop();
//   sortArr.shift();
//   console.log(sortArr);
//   return sortArr.reduce((acc, item) => acc + item, 0);
// }

// function sumArray(array) {
//   if (!array) {
//     return 0;
//   }
//   const sortArr = array
//     .sort((a, b) => a - b)
//     .slice(1, array.length-1)
//     .reduce((acc, item) => acc + item, 0);
//   return sortArr;
// }

// const sumArray = (array) =>
//   !array
//     ? 0
//     : array
//         .sort((a, b) => a - b)
//         .slice(1, array.length - 1)
//         .reduce((acc, item) => acc + item, 0);

// console.log(sumArray(null));
// console.log(sumArray([]));
// console.log(sumArray([3]));
// console.log(sumArray([3, 5]));
// console.log(sumArray([6, 2, 1, 8, 10]));
// console.log(sumArray([0, 1, 6, 10, 10]));
// console.log(sumArray([-6, -20, -1, -10, -12]));
// console.log(sumArray([-6, 20, -1, 10, -12]));

// const binaryArrayToNumber = (arr) => {
//   return parseInt(arr.join(""), 2);
//   //   console.log(arr);
//   // your code
// };
// console.log(binaryArrayToNumber([1, 1, 1, 1]));

// function wave(str) {
//   const arr = [];

//   for (let i = 0; i < str.length; i += 1) {
//     // let el = str;
//     // // el[i] = el[i].toUpperCase();
//     // el.replace(el[i], el[i].toUpperCase());

//     const elArr = str.split("");
//     if (elArr[i] === " ") {
//       continue;
//     }

//     elArr[i] = elArr[i].toUpperCase();
//     let el = elArr.join("");

//     arr.push(el);
//   }
//   console.log(arr);
//   return arr;
// }

// // console.log(wave("codewars"));
// // wave("xxcodewars");
// wave(" two words ");

// function isTriangle(a, b, c) {
//   const max = Math.max(a, b, c);
//   const total = a + b + c - max;
//   console.log(max);
//   if (total) {
//     return true;
//   }
//   return false;
// }

// isTriangle(1, 3, 7);
// console.log(isTriangle(1, 3, 7));

// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((item) => item.split("").reverse().join(""))
//     .join(" ");

//   // Go for it
// }
// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

// function feast(beast, dish) {
//   console.log(beast[beast.length - 1]);
//   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
// }

// // feast("great blue heron", "garlic naan");
// console.log(feast("great blue heron", "garlic naan"));
// // feast("brown bear", "bear claw");
// console.log(feast("brown bear", "bear claw"));

// function getCount(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   return str.split("").filter((item) => vowels.includes(item)).length;
// }

// console.log(getCount("abracadabra"));

// function tribonacci(signature, n) {
//   //   console.log(signature);
//   for (let i = 0; i < signature.length; i += 1) {
//     if (signature.length < n) {
//       const total = signature[i] + signature[i + 1] + signature[i + 2];
//       signature.push(total);
//     } else {
//       // console.log(signature.slice(0, n));
//       return signature.slice(0, n);
//     }
//   }
//   console.log(signature);
//   return signature;
// }

// tribonacci([1, 1, 1], 10);
// console.log(tribonacci([1, 1, 1], 10));
// tribonacci([0, 0, 1], 10);
// tribonacci([0, 1, 1], 10);
// //  tribonacci([ [1,0,0], 10], [1,0,0,1,1,2,4,7,13,24]      )
// //  tribonacci([ [0,0,0], 10], [0,0,0,0,0,0,0,0,0,0]        )
// //  tribonacci([ [1,2,3], 10], [1,2,3,6,11,20,37,68,125,230])
// //  tribonacci([ [3,2,1], 10], [3,2,1,6,9,16,31,56,103,190] )
// //  tribonacci([ [1,1,1],  1], [1])

// function sortArray(array) {
//   console.log(array.filter((item) => item % 2));
//   console.log(array.filter((item) => !(item % 2)).sort((a, b) => a - b));
// }
// sortArray([5, 3, 2, 8, 1, 4]);
// sortArray([5, 3, 1, 8, 0]);
// // assert.deepEqual(sortArray([]),[]);

// var isSquare = function (n) {
//   if (n < 0) {
//     return false;
//   }
//   if (!n) {
//     return true;
//   } else {
//     // console.log(Math.sqrt(n) % 1);
//     // console.log(Boolean(!!~(Math.sqrt(n) % 1)));
//     return !(Math.sqrt(n) % 1);
//   }

//   //   return false; // fix me
// };
// console.log(isSquare(-1));
// console.log(isSquare(0));
// console.log(isSquare(3));
// console.log(isSquare(144));

// function oddOrEven(array) {
//   const total = array.reduce((acc, item) => acc + item, 0);
//   console.log(total);
//   if (!total || !array.length) {
//     return "even";
//   } else {
//     return !(total % 2) ? "even" : "odd";
//   }
// }

// console.log(oddOrEven([]));
// console.log(oddOrEven([0, -1, 2]));
// console.log(oddOrEven([1023, 1, 2]));

// function isPangram(string) {
//   stringLower = string.toLowerCase();

//   const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   return alphabet.every((item) => stringLower.indexOf(item) !== -1);
// }

// function sortArray(array) {
//   const oddArr = array.filter((item) => item % 2).sort((a, b) => a - b);
//   console.log(array);
//   console.log(oddArr);
//   const newArray = [];
//   for (let i = 0, n = 0; i < array.length; i += 1) {
//     if (!(array[i] % 2)) {
//       newArray.push(array[i]);
//     } else {
//       newArray.push(oddArr[n]);
//       n += 1;
//     }
//   }
//   console.log(newArray);
//   return newArray;
// }

// sortArray([5, 3, 2, 8, 1, 4]);
// sortArray([5, 3, 1, 8, 0]);
// sortArray([]);

// console.log(true == []);
// console.log(true == ![]);
// console.log(!![] + !!![]);

// Додаткове завдання
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");

// class Toggle {
//   on = false;
//   constructor(isOpen) {
//     this.isOpen = isOpen;
//   }
// }

// function nameInStr(str, name) {
//   name = name.toLowerCase().split("");
//   str = str.toLowerCase().split("");
//   const newArr = [];
//   let i = 0;
//   for (const item of name) {
//     for (let n = 0; n < str.length; n += 1, i += 1) {
//       if (str[i] === item) {
//         newArr.push(item);
//         i += 1;
//         break;
//       }
//     }
//   }

//   console.log(newArr.join(""));
//   // console.log(name.toLowerCase());
//   console.log(newArr.join("") === name.join(""));
//   return newArr.join("") === name.join("");
// }

// const nameInStr = (str, name) => [...str.toLowerCase()].reduce((acc, item) => (acc < name.length && item === name[acc].toLowerCase() ? acc + 1 : acc), 0) === name.length;

// nameInStr("Across the rivers", "chris"), //true)
//   //   nameInStr("Next to a lake", "chris"), //false)
//   //   nameInStr("Under a sea", "chris"), //false)
//   //   nameInStr("A crew that boards the ship", "chris"), //false)
//   //   nameInStr("A live son", "Allison"); //false)
//   nameInStr("naylllniyertreeeaya eeoewaojswrcy l  omaeaby rm ryivxafkysriyrrmaomyaberi tetpirjn  r rdlaii adnlrsyii rnmailajlyamow", "Brittany");

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     //  if (this.potions.includes(newPotion)) {
//     //   return `Error! Potion ${newPotion} is already in your inventory!`;
//     // }
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     // const newProduct = {
//     //     ...newPotion,
//     // };

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     // const potionIndex = this.potions.indexOf(potionName);

//     //     if (potionIndex === -1) {
//     //       return `Potion ${potionName} is not in inventory!`;
//     //     }

//     //     this.potions.splice(potionIndex, 1);
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potionName === potion.name) {
//         return this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     // const potionIndex = this.potions.indexOf(oldName);

//     //     if (potionIndex === -1) {
//     //       return `Potion ${oldName} is not in inventory!`;
//     //     }

//     //     this.potions.splice(potionIndex, 1, newName);
//     //   },

//     // let result = `Potion ${oldName} is not in inventory`;
//     // for (let i = 0; i < this.potions.length; i += 1) {
//     //   const potion = this.potions[i];
//     for (const potion of this.potions) {
//       if (oldName === potion.name) {
//         potion.name = newName;
//         // result = `Found ${oldName} change to ${newName} `;
//       }
//     }
//     // return console.log(result);
//   },
// };

// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
// console.log(atTheOldToad.potions);

// function nbYear(p0, percent, aug, p) {
//   let years = 0;
//   for (let i = 0; p0 < p; i += 1) {
//     p0 += Math.floor(p0 * (percent / 100) + aug);
//     console.log(p0);
//     years += 1;
//   }
//   return years;
// }

// console.log(nbYear(1500, 5, 100, 5000));

// function queueTime(customers, n) {
//   const arr = new Array(n).fill(0);
//   for (const item of customers) {
//     let i = arr.indexOf(Math.min(...arr));
//     arr[i] += item;
//   }
//   return Math.max(...arr);
// }

// // queueTime([5, 3, 4], 1); //12
// queueTime([5, 3, 4, 5, 8, 3, 7, 3, 1], 5); //12
// queueTime([10, 2, 3, 3], 2); //10
// queueTime([2, 3, 10, 2], 2); //12

// function queueTime(customers, n) {
//   /**
//    * ------------------ EXAMPLE:
//    * if customers --> [2, 3, 10]
//    * and if n --> 2
//    */

//   let queueArr = Array(n).fill(0);
//   // EXAMPLE: queueArr --> [0, 0];

//   customers.forEach((customer) => {
//     queueArr[0] += customer;
//     /**
//      * ------------------ EXAMPLE:
//      * 1 iteration queueArr --> [2, 0];
//      * 2 iteration queueArr --> [3, 2];
//      * 3 iteration queueArr --> [12, 3];
//      */

//     queueArr.sort((a, b) => a - b);
//     /**
//      * ------------------ EXAMPLE:
//      * 1 iteration queueArr --> [0, 2];
//      * 2 iteration queueArr --> [2, 3];
//      * 3 iteration queueArr --> [3, 12];
//      */
//   });

//   return queueArr[queueArr.length - 1]; // EXAMPLE: last num in queueArr --> 12
// }

// function longest(s1, s2) {
//   return (s1 + s2)
//     .split("")
//     .sort((a, b) => a.localeCompare(b))
//     .filter((item, idx, arr) => arr.indexOf(item) === idx)
//     .join("");
// }

// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// longest("aretheyhere", "yestheyarehere");
// longest("loopingisfunbutdangerous", "lessdangerousthancoding");
// longest("inmanylanguages", "theresapairoffunctions");
// // Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
// // Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
// // Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")

// function findShort(s) {
//   console.log(s.split(" ").reduce((acc, item) => (acc.length < item.length ? acc : item), 0).length);
// }

// findShort("bitcoin take over the world maybe who knows perhaps");

// assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
// assert.strictEqual(findShort("Let's travel abroad shall we"), 2);

// function getMichaelLastName(inputText) {
//   const arr = inputText.replaceAll(/[^a-zа-яё0-9\s]/gi, "").split(" ");
//   console.log(arr);
//   let arrLastName = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === "Michael") {
//       if (arr[i + 1][0] < "a") {
//         arrLastName.push(arr[i + 1]);
//       }
//     }
//   }
//   return arrLastName;
// }

// const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

// getMichaelLastName(inputText); //["Jordan","Johnson","Green","Wood"]);

// const uniqueInOrder = (iterable) => (typeof iterable === "string" ? iterable.split("").filter((item, idx, arr) => item !== arr[idx + 1]) : iterable.filter((item, idx, arr) => item !== arr[idx + 1]));

// const uniqueInOrder = (iterable) => [...iterable].filter((item, idx, arr) => item !== arr[idx + 1]);
// // }
// // const arr = iterable.split("");
// // console.log(arr);
// // const uniArr = arr.filter((item, idx, arr) => item !== arr[idx + 1]);
// // console.log(uniArr);
// // return uniArr;
// // };

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));
// console.log(uniqueInOrder([1, 2, 3, 4, 1, 1, 3, 4, 4]));

// function countBy(x, n) {
//   let z = [];
//   // for (let i = 1; i <= n * x; i += 1) {
//   //   if (!(i % x)) {
//   //     z.push(i);
//   //     console.log(z);
//   //   }
//   // }
//   for (let i = 1; i <= n; i += 1) {
//     z.push(i * x);
//   }
//   console.log(z);
//   return z;
// }

// countBy(1, 10);
// countBy(2, 5);

// function fibonacci(num) {
//   if (num <= 1) return 1;

//   console.log(fibonacci(num - 1) + fibonacci(num - 2));
// }

// fibonacci(1);

// function productFib(prod) {
//   // ...
//   // const number = parseInt();
//   const fib = [];
//   let n1 = 0,
//     n2 = 1,
//     nextTerm;
//   fib.push(n1, n2);

//   for (let i = 1; i < prod / (n1 * n2); ) {
//     // console.log(n1);
//     nextTerm = n1 + n2;
//     fib.push(nextTerm);
//     n1 = n2;
//     n2 = nextTerm;
//   }
//   console.log(fib);
//   console.log([n1, n2, n1 * n2 === prod]);

//   // const newArr = [];
//   // const el1 = fib[fib.length - 1];
//   // const el2 = fib[fib.length - 2];
//   // newArr.push(el2, el1, el1 * el2 === prod);
//   // console.log(newArr);
//   // return newArr;
// }

// productFib(800);

// const sequenceSum = (begin, end, step) => {
//   if (begin > end) {
//     return 0;
//   }

//   let total = 0;
//   for (let i = begin; i <= end; i += step) {
//     total += i;
//   }
//   console.log(total);
//   return total;
//   // let total = [begin];
//   // for (let i = begin; i < end; i += step) {
//   //   begin += step;
//   //   if (begin <= end) {
//   //     total.push(begin);
//   //   }
//   // }
//   // const sum = total.reduce((acc, item) => (acc += item), 0);

//   // console.log(sum);
//   // return sum;
// };

// sequenceSum(2, 6, 2); //12
// sequenceSum(1, 5, 1); //15
// sequenceSum(1, 5, 3); //5

// function fakeBin(x) {
//   const arr = x.split("").map((item) => (Number(item) >= 5 ? (item = 1) : (item = 0)));
//   console.log(arr.join(""));
//   return arr.join("");

// x = Number(x);
// console.log(x);
// for (let i = 0; i < x.length; i += 1) {
//   if (Number(x[i]) >= 5) {
//     x.replaceAll(x[i], "1");
//   } else {
//     x[i] = 0;
//   }
// }

// console.log(x);
// x = x.split("");
// for (let y of x) {
//   if (Number(y) >= 5) {
//     y = 1;
//   } else {
//     y = 0;
//   }
// }
// console.log(x);
// return x.join("");
// }

// fakeBin("45385593107843568");
// fakeBin("509321967506747");
// fakeBin("366058562030849490134388085");
// assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
// assert.strictEqual(fakeBin('509321967506747'), '101000111101101');
// assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');

// function toJadenCase(string) {
//   const arrs = string.split(" ");
//   for (const arr of arrs) {
//     arr[0] = arr[0].toUpperCase();
//   }
//   // .map((item) => item[0].toUpperCase());
//   console.log(arrs.join(" "));
//   return arrs.join(" ");
// }

// toJadenCase("How Can Mirrors Be Real If Our Eyes Aren't Real");

// const str = "How can mirrors be real if our eyes aren't real";

// String.prototype.toJadenCase = function () {
//   // console.log(
//   //   str
//   //     .split(" ")
//   //     .forEach((arr) => (arr[0] = arr[0].toUpperCase()))
//   //     .join(" ")
//   // );
//   const arrs = str.split(" ");
//   const newArr = [];
//   for (let i = 0; i < arrs.length; i += 1) {
//     arrs[i][0] = arrs[i][0].toUpperCase();
//     newArr.push(arrs[i]);
//     console.log(arrs[i]);
//   }
//   console.log(arrs.join(" "));
//   return arrs.join(" ");
// };

// str.toJadenCase();

// console.log(018 - 015);

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// function duplicateEncode(word) {
//   return word
//     .split("")
//     .map((item, idx, arr) => (arr.filter((el) => item.toLowerCase() === el.toLowerCase()).length === 1 ? (item = "(") : (item = ")")))
//     .join("");
// }

// // .toLowerCase()
// console.log(duplicateEncode("din"));
// console.log(duplicateEncode("recede"));
// console.log(duplicateEncode("Success"));
// console.log(duplicateEncode("(( @"));

// console.log("b" + "a" + +"a" + "a");

// // 11 4
// x = 11 % 4; // 3
// console.log(x);
// x = 3 % 4; // 3
// console.log(x);
// y = 4 % 3; //1
// console.log(y);
// // x = x % y
// // x = x % y
// // y = y % x

// function sumDigPow(a, b) {
//   const range = [];
//   for (let i = a; i <= b; i += 1) {
//     range.push(i);
//     // console.log(i);
//   }
//   // const arr = [];
//   // console.log(range.filter((item, idx) => item == Math.pow(Number(item[idx]), idx + 1) + Math.pow(Number(item[idx + 1]), idx + 2)));
//   const arr = range.filter(
//     (item) =>
//       item
//         .toString()
//         .split("")
//         .reduce((acc, elem, idx) => (acc += Math.pow(Number(elem), idx + 1)), 0) == item
//   );
//   console.log(arr);
//   return arr;
// }

// sumDigPow(10, 100);
// sumDigPow(50, 150);

// const rps = (p1, p2) => {
//   const p = 'paper';
//   const r = 'rock';
//   const s = 'scissors';

//   const getMsg = n => `Player ${n} won!`;
//   if (p1 === p2) {
//     return "Draw!";
//   }
//   if (p1 === r) {
//     return p2 === s ? getMsg(1) : getMsg(2);
//   }
//    else if (p1 === s) {
//    return p2 === p ? getMsg(1) : getMsg(2);
//   }
//   else { return (p2 === r) ? getMsg(1) : getMsg(2);
//   }
// };

// console.log(rps("rock", "scissors"));

// function lovefunc(flower1, flower2) {
//   return Boolean((flower1 % 2 && !(flower2 % 2)) || (!(flower1 % 2) && flower2 % 2));
//   // moment of truth
// }

// console.log(lovefunc(1, 2));
// console.log(lovefunc(0, 2));

// function digPow(n, p) {
//   const arrs = n.toString().split("");
//   let total = 0;
//   for (const arr of arrs) {
//     total += Math.pow(arr, p);
//     p += 1;
//   }
//   console.log(total)
//   if (!(total % n)) {
//     return total / n;
//   } else {
//     return -1;
//   }
// }
// console.log(digPow(89, 1)); //1
// console.log(digPow(92, 1)); //-1
// console.log(digPow(46288, 3)); //51

// function correct(string) {
//   return string.replaceAll("0", "O").replaceAll("5", "S").replaceAll("1", "I");
// }

// console.log(correct("L0ND0N"));
// console.log(correct("DUBL1N"));
// console.log(correct("51NGAP0RE"));
// console.log(correct("BUDAPE5T"));
// // assert.strictEqual(correct("L0ND0N"), "LONDON");
// // assert.strictEqual(correct("DUBL1N"), "DUBLIN");
// // assert.strictEqual(correct("51NGAP0RE"), "SINGAPORE");
// // assert.strictEqual(correct("BUDAPE5T"), "BUDAPEST");
// // assert.strictEqual(correct("PAR15"), "PARIS");

// function zero(x) {
//   return x ? x(0) : 0;
// }
// function one(x) {
//   return x ? x(1) : 1;
// }
// function two(x) {
//   return x ? x(2) : 2;
// }
// function three(x) {
//   return x ? x(3) : 3;
// }
// function four(x) {
//   return x ? x(4) : 4;
// }
// function five(x) {
//   return x ? x(5) : 5;
// }
// function six(x) {
//   return x ? x(6) : 6;
// }
// function seven(x) {
//   return x ? x(7) : 7;
// }
// function eight(x) {
//   return x ? x(8) : 8;
// }
// function nine(x) {
//   return x ? x(9) : 9;
// }

// function plus(b) {
//   return function (a) {
//     return a + b;
//   };
// }
// function minus(b) {
//   return function (a) {
//     return a - b;
//   };
// }
// function times(b) {
//   return function (a) {
//     return a * b;
//   };
// }
// function dividedBy(b) {
//   return function (a) {
//     return a / b;
//   };
// }

// console.log(zero(plus(zero())));
// console.log(two(times(three())));

// function uni(a(add(b)))

// function result(b) {}

// function count(string) {
//   const arrs = string.split("");
//   const obj = {};
//   for (const arr of arrs) {
//     const filtArr = arrs.filter((item) => item === arr).length;
//     obj[arr] = filtArr;
//   }
//   console.log(obj);
//   return obj;
// }
// count("");
// count("aba");
// count("ab");
// count("ABC");

// function alphabetPosition(text) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   const arrs = text.toLowerCase().split("");
//   console.log(arrs);
//   const newArr = [];
//   for (const arr of arrs) {
//     if (alphabet.includes(arr)) {
//       newArr.push(alphabet.indexOf(arr) + 1);
//     }
//   }
//   console.log(newArr.join(' '));
//   return newArr.join(' ');
// }
// alphabetPosition("The sunset sets at twelve o' clock.");
// // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// alphabetPosition("The narwhal bacons at midnight.");
// //  "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"

(() => {
  let x = (y = 10);
})();
console.log(typeof y);
