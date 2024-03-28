// Array Map : Transforming/רשימה חדשה
// let numbers = [45,78,34,91]

// let doublIedNumbers = numbers.map((num,index)=>{
//     return num * 2
// })
// console.log(doublIedNumbers);

// let arr = [1,2,3,4,5]

// // let numsTimesIndex =arr.map((num,index)=>{
// //     return num * index
// // })
// // console.log(numsTimesIndex);
// let numsTimesIndex =arr.map((num,index)=>{
//     return `${num}* ${index}= ${num * index}`
// })
// // console.log(numsTimesIndex);

//  let names = ['nadv' ,'shosh' ,'sarah' ,'odaya']
//  let correctNames = names.map((name,index)=>{
//     return name[0].toUpperCase() + name.slice(1)
// })
// console.log(correctNames);

// Object:
// myArr = [10,20,30,40];

// let newArr = myArr.map((val, i, arr) => {
//   return {
//     value: val,
//     index: i
//   };
// });
// console.log( newArr);

// Array Filter : Filtering/סינון
// let numbers2 = [45,78,34,91]
// let biggerThen40 =numbers2.filter((num)=>{
//     return num > 40
// })
// // console.log(biggerThen40);

// let names2 = ['nadv' ,'shosh' ,'sarah' ,'odaya']
// let notStartS =names2.filter((name)=>{
//     return name[0] !='s'
// })
// console.log(notStartS);

// Array Reduce סכוםכולל
let numbers3 = [45,78,34,31,91]
let redused =numbers3.reduce((acc ,num)=>{
return acc +num
})
// console.log( redused);

let bills =[45 ,79 ,157, 389]
let account =1000
let accountAfter =bills.reduce((acc ,bill )=>{
    return acc - bill
    },account)
    // console.log(accountAfter);

//  Destructuring משתנים
let a,b,c;
[a,b,c]=[10,20,30]
console.log(a);
    
// Spread Operatorהוספת משתנים חדשים
let colors =['red' , 'blue']
let newcolors =['pink' ,'purple' ,'ornge',...colors]
console.log(newcolors);

// Rest Operatorשאר המשתנים
let [pink ,purple, ...othercolors] =newcolors
console.log(othercolors);

// Cloning Arraysלהעתיק רשימות
let newcolors2 =newcolors
let newcolors3 = [...newcolors]
newcolors.push('green')
console.log(newcolors2);
console.log(newcolors3);
