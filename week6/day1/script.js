// function sayHi(phrase, who) {
//     alert( phrase + ', ' + who );
//   }

//    const sayhi=(phrase, who)=>{
//     alert( phrase + ', ' + who );
//    }
 
// setTimeout(sayHi, 5000, "Hello", "John");

// setTimeout((phrase, who) => {
//   alert( phrase + ', ' + who );
// }, 5000, "Hello", "John");

// let study = confirm('do you want study in friday?')
// if (study) {
//   setTimeout(() => {
//     alert('you said yes')
//   }, 5000);
// } else {
//   function nonoo() {
//     alert('you said no')
    
//   }
//   setTimeout(nonoo ,5000)
// }

let counter = 0
setInterval(() => {
  console.log(counter);
  counter++
} ,3000);

let id;
function setInter(){
  let num = 0
  id = setInterval(function(){
    console.log(num);
    num ++
  },1000);
}





