// const number = [3, 4, 5, 6, 7, 8];
// // output = [];
// // for(let i = 0; i <number.length; i++){
// //     const element = number[i];
// //     const result = element * element;
// //     output.push(result);
// // }
// // smartly korbo
// // function square(element){
// //     return element * element;
// // } 
// // const result = number.map(function square(element){
// //     return element * element;
// // })
// // const result = number.map(x => x * x);
// // console.log(result);

// const bigger = number.filter(x => x <5);

// const isTher = numbers.find(x => x > 5);

// // console.log(isThere);




// by for loop

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

output = [];

for(let i = 0; i< numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

console.log(output);

// map by arrow function

const result = numbers.map(x => x*x);

console.log(result);