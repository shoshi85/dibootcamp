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
 const times2 = num => num*2
 console.log(times2(25));

// Exercise
const calculator = (num1 , num2, sign)=>
    sign == `+` ? num1 +num2 :
    sign == `-` ? num1 -num2 :
    sign == `*` ? num1 *num2 :
    console.log(`not supported`);

console.log(calculator(2,5,`*`));
console.log(calculator(2,5,`-`));
console.log(calculator(2,5,`+`));