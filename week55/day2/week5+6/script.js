// let title1 = document.getElementById('title')
// let title2 = document.querySelector ('#title')
// let title3 = document.getElementsByClassName ('titles')[0]
// let title4 = document.getElementsByTagName('h1')[0]

// // // title1.textContent ='hello word'

// let button =document.createElement('button')
// button.textContent ='click here'

// let body = document.getElementsByTagName('body')[0]
// button.style.backgroundColor = 'black'
// button.style.color = 'white'
// button.style.padding ='8px'
// body.appendChild(button)

// button.addEventListener('click', ()=>{
//     setTimeout(() => {
//         console.log('hello word');
//     }, 3000);   
// })
// let counter =1
// let intervalname = setInterval(() => {
//     if (counter == 5) {
//         clearInterval(intervalname)
//     }
//     console.log(counter);
//     counter++
// }, 500);

// Exercise 1

let div = document.querySelector("div");
console.log(div);
let body = document.getElementsByTagName('body')[0]

let li = document.getElementsByTagName('li')[1]
console.log(li);
li.textContent =  "Richard"

let li1= document.getElementsByTagName("li")[3]
li1.remove();

let ul = document.getElementsByTagName('ul')
for (const iterator of ul) {
    iterator.children[0].textContent='shosh'
    // console.log(iterator.children);
}





