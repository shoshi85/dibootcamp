// let numbres =[1,2,3,4,5]
// let names =['nadav','yaffa','shosh']
// for (const number of numbres) {
//     console.log(number+10);    
// }
// for (const number of numbres) {
//     let bignumber =number +10
//     console.log(bignumber);
// }

// for (number of names) {
//     console.log(number.toUpperCase());

// // }

// let obj ={
//     name:'nadav',
//     age:25
// }
// for (const key in obj) {
//    console.log(key,'-',obj[key]);
// }
// for (let index = 0; index < 3; index++) {
//    console.log('hello!');

// }
// for (let index = 0; index <names.length; index++) {
//     console.log (names[index]);

// }

// let counter =0
// // while (counter < names.length) {
// //     counter++
// //     console.log(counter);
// // }

// do {  
//     counter++
//     console.log(counter);
// } while (counter < names.length);


1
// for (let index = 0; index <= 15; index++) {
//   if (index % 2 == 0) {
//     console.log(index + ' is even');
//   } else {
//     console.log(index + 'is odd');
//   }

// }

2
let namess = ["john", "sarah", 23, "Rudolf", 34]

for (let index = 0; index < namess.length; index++) {
    if (typeof namess[index] == 'string') {
        let nameItem = namess[index]
        if (nameItem[0] === nameItem.toUpperCase()[0]) {
            console.log(nameItem);
        }
    }
}
