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