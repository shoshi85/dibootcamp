// function evenodd(num) {
//     for (let index = 0; index <= num; index++) {
//     if (index % 2 == 0) {
//       console.log(index + ' is even');
//     } else {
//       console.log(index + 'is odd');
//     }    
//   }    
// }
// evenodd(10)
// evenodd(15)
// evenodd(150)
// evenodd(183)

// function evenodd(num ,num2) {
//     for (let index = 0; index <= num; index++) {
//     if (index % num2 == 0) {
//       console.log(index + ' is even');
//     } else {
//       console.log(index + 'is odd');
//     }    
//   }    
// }
// evenodd(10 ,2)
// evenodd(15 ,3)
// evenodd(150, 7)
// evenodd(183 ,10)

// function parentsage(myage) {
//     console.log(`my age is :${myage} ,my mother age is: ${myage*2},  my dad age is:${myage*2*1.2} `
//     );
    
// }
// // parentsage(10)

// function five(params) {
//     return 5
// }

// function hello(name) {
//     return name
//     console.log(name);
// }

// console.log(`${hello('shosh')} is great`);
// console.log(five() +4);

// let num2 =0
//  function counter() {
//     let num=0
//     console.log(num);
//     console.log(num2);
//     num++
//     num2++
//     console.log(num);
//     console.log(num2);
    
//  }
//  counter()
//  counter()

let obj ={
    add:function (num1 ,num2) {
       return num1 + num2 
    },
    name :'nadav',
    greeting :function (params) {
       return`hello ${this.name} ,how are you?` 
    }
}

console.log(obj.name);
console.log(obj.add(35, 23));
console.log(obj.greeting());