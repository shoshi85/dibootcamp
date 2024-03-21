// function func() {
//     let x ='hello'
//     if (condition) {
//         console.log(x); 
//     }
// }
// //  עובדת  פונקציה  הבלוק בתוך


// function func() {
//     let x ='hello'
//     if (condition) {
//     }
// }
// console.log(x);
// // עובדת  פונקציה לבלוק מחוץ
// function sayhello(name= 'guset') {
//     console.log('hello' ,name);
// }
// sayhello ('sarha')
// sayhello ('shosh')
// sayhello ()
// הקו   יפעל   אז   name='o'    בפונקציה  שמוסיפים  אז  ריק  פרמטר   שיש  ברגע

// let age = 17

// if (age < 18) {
//    console.log("Sorry, you're too young.");
//   } else {
//     console.log("Yay! You're old enough!");
// }

// age < 18 ? console.log("Sorry, you're too young."):
// age > 18 ? console.log("Yay! You're old enough!"):
// console.log('exacyly');
// // (condition) ? if true : if false 

// age < 21 ? console.log("older"):
// age > 18 ? console.log("younger"):
// console.log(false);

// let person = 'shoshi'

// if (person =='shoshi') {
//     console.log('hey');
// } else {
//     console.log('bey');   
// }

// person == 'shoshi'? console.log("hey"):console.log("bey");

// let year = 2000

// year > 2000 ? console.log( "You are in the 21st century"): console.log("You live in the Middle Age")

//  פונקציות חץ

// funcName()
// function funcName() {
    
// }
// // ero function
// const funcName2 =() => {

// }

// // implicit return
// const add = (num1 ,num2) =>{
//     return num1 + num2
// }
//  const add2 = (num1 ,num2) => num1+num2

// const sayHey = name =>{
//     console.log(`hey, ${name}`);
// }

//  function times(num) {
//     return num*2   
//  }
// // eero function  למעלה הדרכים 2במקום  דרך קיצור 
//  const times2 = num => num*2
//  console.log(times2(25));

// // Exercise
// const calculator = (num1 , num2, sign)=>
//     sign == `+` ? num1 +num2 :
//     sign == `-` ? num1 -num2 :
//     sign == `*` ? num1 *num2 :
//     console.log(`not supported`);

// console.log(calculator(2,5,`*`));
// console.log(calculator(2,5,`-`));
// console.log(calculator(2,5,`+`));

// let arr = [2, 3, 4, 5, 6];
// arr.forEach((item ,index)=>{
//     console.log(`number is ${item} 
//     index is${index}`);
// arr[index] = arr [index] *2
// })
// console.log(arr);

// Exercise 
// let numbers = [10,11,12,15,20];
// numbers.forEach((item ,index) => {
//   if (item % 2== 0) {
//     console.log(item); 
// //   }
// // });
// numbers.forEach( (num ,index)=> {
//     num % 2 == 0 ?console.log(num) :   undefined
// });
// // console.log(numbers.some((velue, i)=>{
// //     return (value < 13) 
// // }));

// //  let iftrue = numbers.some((value ,i)=>{
// //     return (value < 13)
// // })
// // console.log(iftrue);

// let ifallftrue = numbers.every((value ,i)=>{
//     return (value > 5)
// // })
// // console.log(ifallftrue);

// // Exercise
// let  words = ["wow","hey","bye"];
// let ifwords= words.some((value ,i)=>{
//     return(` value[0] =='h'`)
// })
// console.log(ifwords);

// // Exercise2
// let words2 = ["hello","hey","hola"];
// let ifallwords = words2.every((value ,i)=>{
//         return (`value [0] =='h'`)
//     })
//     console.log(ifallwords);
 
// Includes
// const fruits = ["banana" ,"qrange", "apple","mango"]
// console.log(fruits.includes('banana',0));