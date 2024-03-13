// function Sayhello() {
//     console.log('hello');
    
// }

// setTimeout(Sayhello ,5000)

// setTimeout(() => {
//    console.log('nadav'); 
// }, 5000);

// setTimeout(() => {
//     alert ("The sales end in 10min ! ")
    
// },3000);

// let counter = 0
// let intervalname = setInterval(() => {
//     if (counter >= 5) {
//      clearInterval(intervalname)   
//     }
//   console.log(counter);
//   counter++
// } ,3000);

// let count =10

// let  countdown =setInterval(() => {
//     if (count==0) {
//      clearInterval(countdown)   
//     }
//     console.log(` The sales end in ${count} sec ! `);
//     count--
// }, 1000);

let body = document.getElementsByTagName('body')[0]
let button = document.createElement('button')
button.textContent = 'click here'
button.addEventListener('click', ()=> {
    let div = document.getElementById('numbers')
    let count = 0
    let countUp = setInterval(()=>{
        if (count == 10) {
            clearInterval(countUp)
        }
        
        let p = document.createElement('p')
        p.textContent = `the number is: ${count}`
        div.appendChild(p)

        count++
    }, 1000)
})

body.appendChild(button)