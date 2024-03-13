
let infolist=[
    { name:'nadav',age:25},
    {name: 'odaya' ,aga:25},
    {name: 'sarah',aga:27},
]

function info(name, age) {
    let out = ` my name is ${name} and i'm ${age} years old .i wes born in ${2024-age}`
    console.log(out);

}

info(`nadav`,25)

for (const iterator of infolist) {
   info(iterator.name ,iterator.aga) 
}


function infoAboutMe(){
    let out = ` my name is  coco and i'm 23 years old .my hobbie is to dance`
    console.log(out);
}
infoAboutMe(`coco` ,23)
  

let listinfoAboutPerson= [
    {personName:'david' ,personAge:45,personFavoriteColor:'blue'},
    { personName:'josh' ,personAge:12,personFavoriteColor:'yellow'},
]


function infoAboutPerson(personName, personAge, personFavoriteColor) {
    let out = `you name is ${personName} you are ${personAge} years old your favorite is ${personFavoriteColor} `
    console.log(out);
    
}
infoAboutPerson(`yoyo` ,24 ,`black`)

 for (const iterator of listinfoAboutPerson ) {
    
    infoAboutPerson(iterator. personName,iterator.personAge ,iterator.personFavoriteColor)
     
 }   
    
function culateTip(params) {
    let bill= prompt('how much money?')
    let tip;
    if (biil<50) {
        tip=bill*0.2
    } else if(bill >=50 && bill <=200 ){
        tip = bill *0.15       
    } else if (bill >200) {
        tip =bill *0.1        
    }else{
        console.log('not a number');
    }
    console.log(bill + tip ); 
}
