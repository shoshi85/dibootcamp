document.getElementById('title').textContent='hello'
let elment=document.getElementById('title')
elment.textContent = 'hello'
elment.style.color = 'red'

let thing =document.createElement('div')
let body =document.getElementsByTagName('body')[0]
let p=document.createElement('p')
p.textContent='i just add this'
thing.appendChild(p)
body.appendChild(thing)

let ul=document.createElement('ul');
let h3=document.createElement('h3');
h3.textContent='this is the list:';
ul.appendChild(h3)
body.appendChild(ul)

let colors=['red' ,'yellow' ,'black', 'blue', 'green', 'white']
for (const color of colors) {
    let li=document.createElement('li');
    li.textContent= color
    li.classList.add('color' ,color)
    ul.appendChild(li)  
}
let red= document.getElementsByClassName('red')[0]
red .classList.replace('color','fishaka')
ul.removeChild(red)