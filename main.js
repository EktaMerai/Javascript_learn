console.log("Hello Ekta!!!");
const laptops = ["dell","apple","asua"];
/* using for of */
for(let laptop of laptops){
    console.log(laptop);
}
console.log("===========");
/* using foreach */
laptops.forEach(function(laptop){
    console.log(laptop);
})
console.log("===========");
/* using for in */
for(let index in laptops){
    console.log(laptops[index]);
}
console.log("===========");

/* for syntax c and c++ way*/
for(let index=0;index<laptops.length;index++ ){
     console.log(laptops[index]);
}
console.log("===========");
var color = "Red";
console.log(color);

var color = "green";
console.log(color);

color = "blue";
console.log(color)

console.log("======let=====");
let name = "Hello Ekta";
name = "Hello Ektaa";
console.log(name);

console.log("======const=====");

const price = 50000000;
console.log(price);

console.log("======scope=====");

const discount = 10
var color = "black"
{
    const discount =20;
    console.log('In scope', discount);
    var color = "white";
    console.log(color)
}

console.log('Global scope',discount);
console.log('Var check',color)

console.log("======data type=====");

dell = 50000
console.log(typeof dell)
console.log(typeof 10.10)

isVaccinated = true
console.log(typeof isVaccinated)

const str = "Hello Ekta";
console.log(typeof str);

const product = { name: 'Nike' , price: 100 }
console.log(typeof product);

const colors = ['red','green','blue'];
console.log(typeof colors);

const rollNo = parseInt("200");
console.log(typeof parseInt);

function add (n1,n2 ){
    return n1 + n2
}
console.log(typeof add)

class Test {

}
test = new Test()
console.log(typeof test)
console.log(typeof Test)

console.log("======data type=====");

const colr = ["red" , "green"];
updatecolor = colr;
updatecolor[0] = "blue";
console.log(colr);
console.log(updatecolor);

console.log("======operator====");

// const add = 10 + 4;
const sub = 10 - 4; 
const mul = 10 * 5;
const exp = 2 ** 3;
const div =  10/4;
const mod = 10 % 4;

// console.log(add);
console.log(sub);
console.log(mul);
console.log(exp);
console.log(div);
console.log(mod);

let i = 0; i ++;
console.log(i);

let cal = 10;
cal -= 10; 
console.log(cal);

producbrand = "dell"
producbrand_price = (producbrand === "dell")?500:1000
console.log(producbrand_price);

const x = 10;
if(x === 10 && x >= 20){
console.log(x);
}else {
    console.log("Nope");
}
const age = 25;

if(age>=27) console.log("allow")
console.log("finish")

const res = (age>=18)?"allow 18+":"finsih";
console.log(res);

console.log("======case====");

const op = "subs"

switch (op){
    case "add":
        console.log(2 + 3);
        break;
    case "mul":
        console.log(10 * 5);
        break;
    case "sub" :
        console.log( 10 - 5);
        break
    default:
        console.log("Wrong")
}

console.log("======loop====");

const p = [100, 200, 300, 400];

for (let i=0;i<p.length;i++){
    console.log(p[i]);
}
console.log("======for of====");

for(let price of p){
    console.log(price);
}
console.log("======for with text====");

const text = "Hello Ekta";

for (let t of text){
    console.log(t);
}
console.log("======for each====");

p.forEach(
    function(element,index,arr){
        console.log(index,element,arr);
    }
)