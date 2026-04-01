console.log("Hello World!\n==========\n");//The let keyword is used to declare variables that can be reassigned but are limited to the block scope. This means that a variable declared with let is only accessible within the block it was defined in.
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);//why not just use the var declarator instead of let? I mean, you could still implement var declarators in java script so long as you mind where you're placing them, and how you're using them....
//what's the difference between java and java script? Java and JavaScript are two distinct programming languages that, despite their similar names, serve different purposes and have unique characteristics.
// Exercise 1//Java is a statically typed, object-oriented programming language designed for building platform-independent applications. It was developed by James Gosling at Sun Microsystems and released in May, 1995. JavaScript is a dynamically typed scripting language primarily used for creating interactive web pages. It was developed by Brendan Eich and released in December, 1995.
const firstName = "Agent";//const means that the variable in question cannot ever be reassigned to a new value, and in this context, it must be declared and initialized all at the same time -- it cannot be declared first, and then initialized later.
let lastName = "Derpage";//like VS Community; Visual Studio Code will show potential compile errors before runtime, in the form of the red underlining squiggles, and you can even pull up another work window at the bottom of the screen which shows your program's output, or potential errors with your code before it's executed.
var age = 49;//while VS Code can catch java script errors inside of the IDE itself, namely if they are compile errors; we can use the google chrome inspector set of dev tools to inspect our work as well, not only for compile errors, but ideally for runtime errors.
// Exercise 2//Remember, just like when we write in C# in VS Community; CLI (windows command prompt) will be the executor of the application, in which all of the potential runtime errors for said application will be made visible. We can check the console of our java script work here by having the page we're working on refreshed whenever ever we want to, and if we click on the console tab from the drop down menu within the google chrome dev tools set, it will tell us what type of error it is, if there is one, and where in the lines of code it's located.
//firstName = "Miah";//can't alter a const value.
lastName = "Harper";//strange, there's no compile or runtime error when typing this line of code without the semi colon on the end, for proper syntax?
var age = 0;//what's the difference between object oriented programming and dynamic programming? Dynamic Programming (DP) and Object-Oriented Programming (OOP) are fundamentally different concepts in computer science, each serving distinct purposes. Comparing them is akin to comparing a problem-solving technique with a programming paradigm.
// Exercise 3
let language = "JavaScript";
let createdYear = 1995;
let isCaseSensitive = true;

console.log(`${language} was first publicly released in the year ${createdYear}.`);//back tics.... grove key? For string interpolation, in JavaScript.

let product = "Time Machine";//these are examples of display values.
let price = 74997.46;
let isOnSale = false;
let salesPercentage = 18;
let stock = 0;
let inStock = false;
let selectedSize = "Large";

console.log(`The ${selectedSize} ${product} is currently priced at $${price}, though unfortunately, it recently sold out and now has a stock level of ${stock}, though it did have a sales percentage of ${salesPercentage} for the day. Is it on sale? ${isOnSale}. Is it going to be in stock again soon? ${inStock}.`);

let title = "Decipher";
let author = "Stel Pavlou";
let pageCount = 528;
let pageBookmark = 467;
let hasRead = true;
let yearPublished = 2001;

console.log(
 `${title}, written by ${author}, published back in the year ${yearPublished} is a dense book containing over ${pageCount} pages, and I happen to have had my last bookmark left on page ${pageBookmark}. Have I read it? ${hasRead}.`
);