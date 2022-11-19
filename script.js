//1
let numbers = ['one', 'two', 'three'];
console.log(numbers);

//2
let line = ['Name', 'Surname', 'Birth'];
console.log(line);

//3
let arr =[1, 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum+=arr[i] ; 
}
console.log(sum);


//5
let seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
console.log(seasons.length);


//6
let seasons2 = ['Winter', 'Spring', 'Summer', 'Autumn'];
console.log(seasons2.at(-1));


//7
let abc = ['a', 'b', 'c'];

console.log(abc);

abc[0] = 1;

console.log(abc);

abc[1] = 2;

console.log(abc);

abc[2]= 3;

console.log(abc);


//8
let numbs = [30 ,40 ,50 ,60];
for( let i = 3; i < numbs.length; ++i ) {
    result += numbs[ i ];
    }