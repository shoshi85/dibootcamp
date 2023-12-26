for (let i = 0; i < 2; i++) {
    console.log("the current number is " + i)
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let arr = [1, 4, 7, 10]
for (let i=0; i<arr.length; i++) {
    console.log(i);
}

let shosh = [58, 52,23,74,95]
for (let i=0; i<shosh.length; i++) {
    console.log(shosh[i]);
}

let numbers= [28,12,32,47,59]
for (const number of numbers) {
    console.log(`the number is:` +number);
}

let person = {
    fname:"John", lname:"Doe", age:25};
for (let x in person) {
  console.log(x) //fname lname age
  console.log(person[x]) // John Doe 25
}

let colors = ["blue", "yellow", "red"];

for (let i in colors) {
   console.log(i); //0 1 2
   console.log(colors[i]) //blue yellow red
}
let num =0
while (num <5){
    num++
    console.log(`hello` + num);

}