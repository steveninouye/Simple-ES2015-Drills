// Declare a new function named favMovie that takes in one parameter.
const favMovie = (movie = 'The Room', name = 'world') =>
    console.log(`My name is ${name} and my favorite movie is ${movie}.`);

// Call the function.
// Open your developer tools and view what is printed in the console. You should see your message and parameter is undefined.
// Now pass in the argument, your favorite movie, when you call the function, update the parameter of the function to have a default value of “The Room”.
// Call the function without passing a movie name of your own, take note to what is printed as the movie in the console.
// Refresh your browser and you should now see your message and the parameter is defined.
// Add another parameter to your function so you can pass it a name, give this parameter a default value of “world”.
// Update the string so that you include your name in the message. Example:
// Call function favMovie by passing it values for both a movie and a name, and also call it without passing it anything. Do the default values appear in the console?
favMovie();
favMovie('Avengers', 'Steven');

// Change the favMovie function to an ES6 Arrow Function.
// Call the function.
// Verify that your message is still logged in the console.
// Use the shorthand "concise body" syntax for this arrow function so that the console.log statement is on the same line as the arrow.
// Create a new arrow function called getFirstName.
const getFirstName = (name) => name.split(' ')[0];
getFirstName('Steven Inouye');
// Create a second arrow function using the concise body syntax. Both function will serve the same purpose.
// Each function will accept a string that will be someone’s full name (first and last separated by a space). (hint)
// When the full name is passed to the function, the function should return the first name.
// Create a new function that will take in two parameters and return an object literal. It should have two properties, the exponent result (x^y) and the product of the two numbers.
const stats = (x, y) => ({ exponentResult: Math.pow(x, y), product: x * y });
//  Log each property using a template literal.
const a = 4;
const b = 5;
console.log(`${a} to the power of ${b} is ${stats(4, 5).exponentResult}`);
console.log(`${a} multiplied by ${b} is ${stats(4, 5).product}`);

// Write a function that takes 3 parameters: name, location, favFood.
const personDetails = (name, location, favFood) =>
    console.log(
        `My name is ${name}. I live in ${location} and my favorite food is ${favFood}.`
    );

// Create an array with 3 values, have the values match the order of the 3 parameters. Ex. let arr = [“Paul”, “Birmingham”, “Kimchi”];
const arr = ['Steven', 'Honolulu', 'Lobster'];
// Spread operators allow us to take multiple values, like an array, and insert them as 3 separate values.
// Using a spread operator insert the values of the array into the function, check the console and see what appears.
personDetails(...arr);
// Create a variable that has a value of your name.
const myName = 'Steven';
// Write a function that takes a parameter, name the parameter whatever you’d like.
// Using spread syntax, create a variable in the function that takes the string you pass into the function and spreads it into an array.
// Using a for loop, loop through the spread string and console log each value of the string.
const logStrLetters = (str) => [...str].forEach((e) => console.log(e));
logStrLetters(myName);
