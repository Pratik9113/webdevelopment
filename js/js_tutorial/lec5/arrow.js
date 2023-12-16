// const arrowsum = (a, b) => {
//     console.log(`the sum of a and b is: '${a + b}'`);
// };

// const arrowmul = (a, b) => {
//     console.log(`the sum of a and b is: '${a * b}'`);
// };

// const arrowmul1 = (a, b) => {
//     return a * b;
// };

// const printhello = () => {
//     console.log('print hello world');
// }

// function vowelcount(str){
//     let count =0;
//     for(const char of str){
//         if(char=='a'|| char == 'e' || char == 'i' || char == 'o' || char == 'u'){
//             count++;
//         }
//     }
//     console.log("the number of count : " + count );
// }

// const countvowel = (str) =>{
//     let count =0;
//     for(const char of str){
//         if(char=='a'|| char == 'e' || char == 'i' || char == 'o' || char == 'u'){
//             count++;
//         }
//     }
//     console.log("the number of count : " + count );
// }

// function myfun(num){
//     return num;
// }

// function abc(){
//     console.log('hello');
// }

// function mixedupfunction(abc){
//     return abc;
// }

// let arr = [1,2,3,4,5];
// arr.forEach(function printval(val,idx,arr){
//     console.log(val,idx,arr);
// })

// arr.forEach((val)=>{
//     console.log(val);
// })

let arr1 = [1,2,3,4,5];
// arr1.forEach((arr)=>{
//     console.log(arr*arr);
// })


// let calsquare = (num) => {
//     console.log(num*num);
// }
// arr1.forEach(calsquare);

// print the element 
// arr1.map((val) =>{
//     console.log(val);
// })


// map
// store the element into new one 
// let newArr = arr1.map((val) =>{
//             return val*val*val;
// });
// console.log(newArr);

// filter print even array in new one 
// let array = [1,2,3,4,5,5,4,7];
// let evenarray = array.filter((val)=>{
//     return val%2!==0;
// });
// console.log(evenarray);

// reduce 
// let arr = [1,2,34,5];
// const output = arr.reduce((res,curr)=>{
//     return res+curr;
// })
// console.log(output);

// for maximum 
// let arr = [1,2,34,5];
// const output = arr.reduce((res,curr)=>{
//     return res < curr ? res : curr;
// })
// console.log(output);

// we are given array of marks of student filter our of the marks of thestudent that scored 90
// let marks = [3,4,2,4,53,5,2,1,91,3,4924,95,324];
// // filter
// let output  = marks.filter((val)=>{
//     return val>90;
// })
// console.log(output);


//take a number n as inout from user create an array of number from 1 to n 
// use the reduce method to calculate sum of the all numbers in the array
// use the reduce method to calculate product of the all numbers in the array
let n = prompt("enter a number");
let arr= [];
for(let i=1;i<=n;i++){
    arr[i-1] = i;
}
const output = arr.reduce((res,curr)=>{
    return res+curr;
})
console.log(output);
const output1 = arr.reduce((res,curr)=>{
    return res*curr;
})
console.log(output1)