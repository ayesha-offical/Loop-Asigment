// QUESTION NO 1

// // 1. Create a blank array: Start by setting up an empty array named myWork that will hold
// // objects.
// // 2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
// // o Create an object representing a lesson.
// // o Each lesson should have a name property, which is a string like "Lesson 1",
// // "Lesson 2", etc.
// // o Each lesson should also have a status property, which alternates between true
// // and false. This means "Lesson 1" will have status: true, "Lesson 2" will have
// // status: false, and so on.

// // 3. Add the lesson to the array: Push each lesson object into the myWork array.
// // 4. Print the result: Finally, log the myWork array to the console to see the list of lessons.


// Step 1: Create a Blank Array

const myWork: { name: string, status: boolean }[] = [];


// Step 2: Use a Loop to Create Lessons
for (let i = 1; i <= 10; i++) {
  //Create an object representing a lesson
  let lesson = {
    name: `Lesson ${i}`,
    status: i % 2 === 1 // Alternates between true and false
  };

  // Step 3: Add the Lesson to the Array
   myWork.push(lesson);
 }

// Step 4: Print the Result
 console.log(myWork);


// QUESTION NO 2

// 1. Set a maximum value: Create a variable to store the maximum value for the number
// guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a
// random number between 1 and the maximum value. Log this value to the console for
// development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
// it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
// correct guess is made.
// 6. Check the user's guess: Inside the loop, check if the current guess matches the random
// number. Provide feedback if the guess is too high or too low.

//ANSWER NO 02

// Step 1: Set a maximum value
const maxValue = 5;

// Step 2: Generate a random number
const randomNumber2 = Math.floor(Math.random() * maxValue) + 1;
console.log(`Random Number (for development purposes): ${randomNumber2}`);

// Step 3: Track the guess status
let isCorrectGuess = false;

// Step 4: Simulate user guesses
const userGuesses = [2,4,5,3];


// Step 5: Iterate over guesses
let index = 0;
while (!isCorrectGuess && index < userGuesses.length) {
  const currentGuess = userGuesses[index];
  console.log(`User's guess: ${currentGuess}`);
  // do something with currentGuess
  index++;
}


if (!isCorrectGuess) {
  console.log('Sorry, you did not guess the correct number.');
}



// QUESTION NO 3

// 1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
// 2. Create a variable, step, to increase your counter by: Define a variable step to hold
// the value by which the counter will be incremented.
// 3. Add a do...while loop: In the loop, print the counter to the console and increment it by
// the step amount each iteration.
// 4. Continue to loop until the counter is equal to or more than 100: The loop should run
// as long as the counter is less than 100.

//ANSWER  NO 03
// Step 1: Set the starting counter to 0
let counter=0;


// Step 2: Create a variable, step, to increase your counter by
let step=10;// You can change this value to any step you want

// Step 3: Add a do...while loop
do{
  // Print the counter to the console 100
  console.log(`counter: ${counter}`);
   // Increment the counter by the step amount
  counter += step;

}while (counter < 100); // Step 4: Continue to loop until the counter is equal to or more than 100

// Print the final counter value
console.log(`Final Counter ${counter}`)



// QUESTION NO 04

// Instructions:
// 1. Create a simple object with three items:
// o Define an object called myObject with three properties: item1, item2, and item3,
// each with corresponding string values.

// 2. Use a for...in loop to get properties' names and values from the object:
// o Iterate through the properties of myObject using a for...in loop.
// o Inside the loop, print each property's name and its corresponding value to the
// console.


//ANSWER NO 04


const myObject={
  item1:"BTS Army Bom",
  item2:"JIMIN Album",
  item3:"Jimin pictures"
}

for (let x in myObject){
  console.log(x,":",myObject[x])
}


for (let properties in myObject){
  console.log("properties: ",properties)
}


// QUESTION NO 05

// Instructions:
// 1. Create an empty array:
// o Define an empty array called myArray.
// 2. Run a loop 10 times, adding a new incrementing value to the array:
// o Use a for loop to iterate 10 times.
// 
// o In each/ iteration, add a new incrementing value (starting from 1) to the myArray.
// 3. Log the array into the console:
// o After populating the array, log the myArray into the console.
// 
// 4. Use the for loop to iterate through the array:
// o Use a for loop to iterate through the array elements.
// o Adjust the number of iterations based on the number of values in the array.
// o Output each array element along with its index into the console.
// Use the for...of loop to output the value into the console from the array:
// o Use a for...of loop to iterate through the array elements.
// o Output each array element directly into the console.

const myArray=[];

for (let i = 1; i <= 10; i++) {
  myArray.push(i);
}
console.log(myArray);


for (let i = 0; i < myArray.length; i++) {
  console.log(`Index ${i}: ${myArray[i]}`);
}


for (const value of myArray) {
  console.log(value);
}