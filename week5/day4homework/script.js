// Exercise 1 : Change The Article
// let h1 = document.querySelector ("h1")
// console.log(h1);

// let article = document.getElementsByTagName('article')[0]
// article.lastElementChild.remove()

// let h2 =document.querySelector('h2')
// console.log(h2);
// h2.addEventListener('click',()=>{
//     h2.style.backgroundColor='red'
// })

// let h3 =document.querySelector('h3')
// h3.addEventListener('click',()=>{
//     h3.style.display='none'
// })

// let button =document.getElementById('click')
// button.addEventListener('click',()=>{
//      let ppps =document.getElementsByTagName('p')
//      for (const iterator of ppps) {
//         iterator.style.fontWeight='bold'
//      }
// })

// Exercise 2 : Work With Forms;
// let form =document.forms[0]
// console.log(form);

// let sId =document.getElementById('fname')
// console.log(sId);
// let sId2 =document.getElementById('lname')

// let noname =form.elements.firstname
// console.log(noname);
// let noname2 =document.getElementsByName("lastname")[0]
// console.log(noname2);

// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//    let nnnn= noname.value
//    let mmmm= noname2.value
//    console.log(nnnn);
//    console.log(mmmm);
//    let ul =document.getElementsByClassName("usersAnswer")[0]
//    let li =document.createElement('li')
//    let li2 =document.createElement('li')
//    li.textContent =nnnn
//    li2.textContent =mmmm
//    ul.appendChild(li)
//    ul.appendChild(li2)
// })
// Exercise 3 : Transform The Sentence
let allBoldItems;
function getBoldItems() {
  allBoldItems = document.getElementsByTagName("strong");
  console.log(allBoldItems);
}
getBoldItems();
console.log(allBoldItems);
function highlight() {
  getBoldItems();
  for (const bolditem of allBoldItems) {
    bolditem.style.color = "blue";
  }
}
highlight();
function returnItemsToDefault() {
  getBoldItems();
  for (const bolditem of allBoldItems) {
    bolditem.style.color = "black";
  }
}
returnItemsToDefault();




