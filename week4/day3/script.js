function sayhello(name ,age ,eyecolor='brown') {
    console.log (`hello! ${name}, you are ${age} years old, your eyes are ${eyecolor}`) ;
}

sayhello('yaffa' ,24 ,'brown')
sayhello('adi')

function change(dolar) {
   return dolar*3.65;
}
change(30)
console.log( `30 dolar=${change(30)}`);

function change2(shekal) {
  console.log(shekal * 0.28);  
}
change2(20)

function familyAge(myAge ) {
    console.log(`my age is :${myAge}.my mother's age is:${myAge*2}.
    my father's aga is:${myAge*2*1.2}`); 
}
familyAge(20)

function myAge() {
    let myAge =20
    return myAge
   
}

function motherAge(myAge) {
    console.log(myAge*2);
    
}
motherAge(myAge())

function myfunc(params) {
    
}

const myfunc2 =()=> {
    
}
