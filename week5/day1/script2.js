let body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = 'pink'
let things = document.getElementsByClassName('pTag')
console.log(things);
things[0].textContent= 'thing1'
for (const thing of things) {
    thing.style.color= 'blue'
}