/*
    Reference code for plain JS following the tutorial from https://www.javascripttutorial.net/. 
*/

//'use strict'; -> do this to prevent global variable leakage
//alert('Hello, World!');

var a = 8, b = 5;

function isBigger(a, b) {
    return a > b;
}

/*
if (isBigger(a, b)) {
    alert("bigger");
} else {
    alert("smaller");
}
*/
let stat = 200.00;
console.log(stat); //Converts to 200 to save memory

let str = "hello";
console.log(str);
str = "goodbye";
console.log(str);
str = str + ", jake";
console.log(str);
console.log(Boolean(NaN));

console.log(100.09.toFixed(1));
let bar = new Boolean(true);
console.log(typeof bar);
let messy = 'HeLlO';
console.log(messy.toLowerCase());
let a1 = 5, b1 = 6;
a1 > b1? (
    console.log('Greater'),
    alert('Greater')
) : (
    console.log('Lesser')//,
    //alert('Lesser')
);

for (var counter = 0; counter < a1; counter += 1) {
    console.log(counter);
}
var msg = `Hello ${counter}`;
console.log(msg);
console.log(msg[msg.length - 3]);
console.log(msg.substr(1, 4));
console.log(msg.substring(4, 7));
console.log(msg.indexOf('l', 3));
let input = ' What u p   ';
let cleaned = input.trim();
console.log(cleaned);
console.log(input.localeCompare(cleaned));
let changed = cleaned.replace(/u/g, "good");
console.log(cleaned + " " + changed);
let data = '1101'.padStart(8, '0'); //adds 4 zeros to front
data = data.padEnd(11); //adds 3 blank spaces to end
data = data.padStart(13, '010101'); //only '01' is added to front as it then hits length 13
console.log(data);
var userInput = '029031309@0393';
console.log(userInput.slice(0, userInput.indexOf('@')));
let domain = userInput.includes(3, userInput.indexOf('@')); //checks after @ to see if there is a 3
let ar = Array(1, 2, 3); // or: let ar = [1, 2, 3];
let v = ar[1]; // v = 2
ar[2] = 'hi';
ar.push(true); //adds true to the end of ar
ar.unshift('bird'); //adds bird to the front of ar
ar.pop(); //removes true. See how you can use push/pop to make a stack?
var first = ar.shift(); //removes bird and sets first to that. Can make a queue using push/shift
console.log(first);
let loc = ar.indexOf(3); //sets loc to 2
ar.sort(); //or ar.sort(comparefunction) such as localeCompare
/* Other array functions that could be useful
every() -> if every element passes a test, some() -> if >= 1 element passes
filter() -> filter elements, map() -> transform array elements
join() -> concatenate all elements into a string
can also make kDimensional arrays in a similar process as in Java
*/
function greet(name) {
    return "Hello " + name;
}
msg = greet("Jake");
console.log(msg);
genericTest(1, 2, "banana", false); //Hoisting- JS moves func declarations to top before execution. So this works.
function genericTest() {
    let output = "";
    for (let i = 0; i < arguments.length; i += 1) {
        output += arguments[i] + " ";
    }
    console.log(output);
}
let mult = (a, b) => a * b; // Anonymous function that does multiplication
(function (a, b) {
    return (a * b) / 2;
}) (4, 6); // An IIFE aka memory efficient way to use a function.
let coolNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evens = coolNumbers.filter(function(num) {
    return !(num % 2);
}); //callback: Function passed into another function

let person = { //This is how you create an object
    name: 'Jake',
    data: {
        age: 19,
        'favorite fruit': 'apple'
    }
}
console.log("Person attributes");
console.log(person.name); //could also say person['name']
console.log(person.data['favorite fruit']);
person.email = 'jake@jakewebs.com'; //adds email property to person
delete person.email; //removes the email property
var check = 'email' in person; //returns whether email is a property of person
let keys = "";
for (let key in person) {
    keys += person[key] + " ";
}
person.greet = function() {
    console.log("Hello " + this.name);
}

function Person(name) {
    this.name = name;
}
Person.prototype.greet = function(other) {
    return this.name + " says hi to " + other;
}
var henry = new Person('Henry');
let hirob = henry.greet('Rob'); //which is similar to henry.greet.call(this, 'Rob')
// other cool Function method: fn.apply(value, args)
// the bind() method can be used to return a function, such as a method from another object
trickyMath(2);
function trickyMath(num1) {
    try {
        return num1 / num2;
    } catch(error){
        return error.name + "; " + error.message + ".";
    } finally {
        console.log("Problem complete!");
    }
}
let regexp = /regular/gi/; //Creates regular expression object. Alternate: new RegExp('regular', 'i');
//The /i/ means to ignore case. So Regular counts instead of just regular
// The /g/ tag means to look for all cases. So .match may return an array. Can say /gi/ to use both
regexp.test("Have you ever seen Regular Show?"); //Returns if the string contains the regexp (true here)
regexp.match("regular Regular REGULAR cool?"); //Returns a list of all matches
let m = regexp.exec("regular Regular REGULAR"); //Returns null when no more
let something = [];
while (m) {
    something.push(m);
    m = regexp.exec("regular Regular REGULAR");
}
/* Fetch from a URL. Source: https://www.javascripttutorial.net/javascript-fetch-api/
   Often say something like let resp = await fetch(url), let data = await resp.text();
    fetch(url)
        .then(response => {
            // handle the response
        })
        .catch(error => {
            // handle the error
        });
*/
