

// regular function with no parameter
function test() {
    return 2;
}
console.log(test());

// or
let test1 = function () {
    return 3
}
console.log(test1());

// arrow function
let test2 = () => {
    return 4
}
console.log(test2());

// or
let test3 = () => 5;
console.log(test3());

// if () is empty replace it by _
let test4 = _ => 5;
console.log(test4());




// regular function with one parameter
function testOne(param) {
    return param * 2;
}
console.log(testOne(16));

// arrow function with one parameter
let testOne1 = (param) => param * 2;

console.log(testOne1(16));

// arrow function with one parameter
// if () have one parameter can remove ()
let testOne2 = param => param * 2;

console.log(testOne2(6));



// regular function with multiple parameter
function testTwo(param1, param2) {
    return param1 * param2;
}
console.log(testTwo(5, 6));

// arrow function with multiple parameter
let testTwo1 = (param1, param2) =>  param1 * param2;
console.log(testTwo1(6, 7));



// function person() {

//     this.age = 0;

//     setInterval(() => {

//         this.age++;

//         console.log(this.age);

//     }, 3000)
// }

// let user = new person();

// defualt parameter
function showMyInfo(username = 'popular user', role = 'member') {

    return `hello: ${username}, Your Role Is: ${role}.`;
}

console.log(showMyInfo());

console.log(showMyInfo("ahmed", "admin"));


// New Array Method

// 1- Array.of()
let myArray1 = Array.of(100);

console.log(myArray1);
console.log(myArray1.length);

// 2- Array.from()
let myArray2 = [10, 20, 30, 15, 100, 50];

let myArrayMinusTen = Array.from(myArray2, item => item - 10)

console.log(myArray2);
console.log(myArrayMinusTen);

// 3- Array.fill(input value, start, end)
let myArray3 = myArray2.fill(100, 1, 3);

console.log(myArray3);

// 4- Array.find()
let myArray4 = myArray2.find(el => el > 10);

console.log(myArray4);

// 5- Array.findIndex()
let myArray5 = myArray2.findIndex(el => el > 10);

console.log(myArray5);

// 6- Array.copyWithin(target, start, end)
let myArray6 = myArray2.copyWithin(1, 4, 6);

console.log(myArray6);

export {myArray2}


// classes

class user {
    constructor(name, age) {

        this.name = name;

        this.age = age;
    }
    getName() {

        console.log(`hello ${this.name}`);
    }
    getDays() {

        console.log(`my age with days ${this.age * 365}`);
    }
}

const firstUser = new user("ahmed", 25)
const secondUser = new user("mohamed", 38)

firstUser.getName();
firstUser.getDays();

secondUser.getName();
secondUser.getDays();



// Promise
const myPromise = new Promise((resolve, reject) => {
    // console.log("welcome");

    let connect = true;
    if (connect) {
        resolve("correct")
    } else {
        reject("Error")
    }
});

myPromise.then(
    (resolved) => console.log(resolved),
    (rejected) => console.log(rejected)
)



// all, race

const myPromise1 = new Promise((resolve) => {
    setTimeout(() => resolve("hello"), 2000)
});
const myPromise2 = new Promise((resolve) => {
    setTimeout(() => resolve("googbay"), 1000)
});

// promise.all
Promise.all([myPromise1, myPromise2]).then(
    (result) => console.log(result)
)

// promise.race
Promise.race([myPromise1, myPromise2]).then(
    (result) => console.log(result)
)















console.log("#######################################")
console.log("Example 1")
const today = new Date();
const day = today.getDay();
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(today);
console.log(`Today is : ${dayList[day]}.`);
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
let prepand = (hour >= 12)? "PM":"AM";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && prepand==='PM') {
    if (minute===0 && second===0) {
        hour = 12;
        prepend = "noon";
    } else {
        hour = 12;
        prepand = "PM";
    }
}
if (hour===0 && prepand==='AM') {
    if (minute===0 && second===0) {
        hour = 12;
        prepand = "Midnight";
    } else {
        hour = 12;
        prepand = "AM";
    }
}
console.log(`Current Time : ${hour} ${prepand} : ${minute} : ${second}`);

console.log("Example 2")

function sum1(...arr) {
    let result = 0;
    arr.forEach( value => {
        result += value;
    });
    return result;
}

console.log(sum1(2, 3, 4, 5, 6));

console.log("Example 3")

function sum2(...arr1) {
    return arr1.reduce( (a, b) => a + b );
}

console.log(sum2(2, 3, 4, 5, 6));

console.log("Example 4")

function sum3(...arr2) {
    let largestVal = 0;
    arr2.forEach( value => {
        if(largestVal < value) {
            largestVal = value;
        }
    });
    return largestVal
}

console.log(sum3(2, 3, 4, 5, 6));

console.log("Example 5")




let myFun = arr3 => {
    // let resultEven = 0;
    // let resultOdd = 0;
    // arr3.forEach( value => {
    //     if( value % 2 === 0 ) resultEven += value;
    //     else resultOdd += value;
    // });
    // return `the Event Numbers is ${resultEven} and the odd numbers is ${resultOdd}`;
    // let x = 7;
    // return x === 5 ? "it's 5" : x === 6 ? "it's 6" : "it's something else";

    let result = 0;

    for( let i = 0; i < arr3.length; i++) {

        result += arr3[i];
    }

    return result;
    // return arr3.reduce((a, b) => a + b);

}

console.log(myFun([1, 2, 3, 4, 5, 6, 7]));


let myParameter = name => {
    
    name.forEach(el => el + 2);

    return name;
    // return Array.from(name)
}
console.log(myParameter([2, 3, 1, 4]));
