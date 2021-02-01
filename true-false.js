// In the name of ALlah 
// const name = "Solaiman Khan";
// const name = " 0 ";


// Falsy value 
// 0 
// ""
// undefined
// null
// false 
// NaN 

// Truthy
// '0' ' ' [] {} 'false'


let name = 0;
console.log(name);

// number one way check true or false

// if(name.length > 0){

// number second way check true or false 

// if(name.length){

// number third way check true or false 

if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}