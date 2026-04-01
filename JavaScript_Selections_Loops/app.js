console.log("Hello World!\n==========\n");//feel free to comment any of these code blocks out, to run them run them individually.... or, have them all run at once.
//I've notice in JavaScript that we can write out method like blocks of code, but without the syntaxing for methods as we would in C#, which is an object oriented programming language. Is that part of what dynamic programming means?
// Exercise 1 Section//it's been suggested that condensing code; making it shorter can actually make it less readable, which is often true.
console.log("EXERCISE 1:\n==========\n");//I've also noticed that since we're not necessarily formatting these method like functions in JavaScript as we would in C#, that we can write them out, but without expressing any arguments, parameters, or return types.
for (let i = 1; i <= 99; i += 2)
{
    console.log(i);//no conditional needed for this format -- just prints all numbers starting from one. incremented by 2 each time.
}

for (let i = 1; i < 100; i++)
{
    if (i % 2 != 0)
    {
        console.log(i);
    }
}

let i = 1;
while (i < 100)
{
    if (i % 2 !== 0)//why is it that we can write conditionals in this case as both != or !==?
    {
        console.log(i);
    }
    i++;//since this is not in the style of a for loop, we need to ensure that i increments until it eventually passes a value of 100, so the while loop will know to stop.
}

let x = 1;
do
{
    if (x % 2 !==0)
    {
        console.log(x);
    }
    x++;
} while (x < 100);


//Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i < 100; i++)
{
    console.log(i);//just to check each number.
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log("FIZZBUZZ")
    }
    else//why write this as else { if {} } as opposed to else if {}?
    {
        if (i % 3 == 0)
        {
            console.log("FIZZ");
        }
        if (i % 5 == 0)
        {
            console.log("BUZZ");
        }
    }

    for (let i = 1; i < 100; i++)//writing code blocks like this seems to require less lines to write out the same amount of code. Don't know if I like the readability of it though....
    {
        if (i % 3 == 0) {
            console.log(i, "FIZZ");
        } else if (i % 5 == 0){
            console.log(i, "BUZZ");
        } else {
            console.log(i);
        }
    }

    for (let i = 1; i < 100; i++)//this works in the opposite incremental direction as strictly using only if statements to define the conditionals, and it's because we're implementing else if statements after an initial if statement, instead of using only if statements. Else if works as a sort of function that only occurs after the if conditional has been checked by the program, which is why this method can check for 15 first, then 5, then 3.
    {
        if (i % 15 == 0)//If it's all if statements, then the program is going to check through all of them at the same time, in which case, it would maker sense to have it check for the smaller values first, then the larger ones after, or else if you do it the opposite incremental direction, then those other if statements never get their conditionals checked when the program's running.
        {
            console.log("FIZZBUZZ");//this perspective on if, else if, and else statements helps to provide more insight as to when to use if versus else if statements, as in many cases, this distinction doesn't necessarily matter, and they could be used interchangeably. I imagine that this logic remains true in other programmatic languages like C#.
        }
        else if (i % 5 == 0)
        {
            console.log("BUZZ");
        }
        else if (i % 3 == 0)
        {
            console.log("BUZZ");
        }
    }

    for (let i = 1; i < 100; i++)//this version uses only two conditionals.
    {
        let value = "";
        if (i % 3 == 0)
        {
            value += "FIZZ";
        }
        if (i % 5 == 0)
        {
            value += "BUZZ";
        }
        console.log(`${i} ${value}`);
    }
}

//Exercise 3

    let z = 1;
        while (z < 100)
        {
        let value = "";
        //if (i % 3 == 0)//not sure why I wrote i as a variable here instead of z....
        //{
        //     value += "FIZZ";
        // }
        // if (i % 5 == 0)
        // {
        //     value += "BUZZ";
        // }
        if (z % 3 == 0)
        {
            value += "FIZZ";
        }
        if (z % 5 == 0)
        {
            value += "BUZZ";
        }
        console.log(`${i} ${value}`);
    }

    let y = 1;
    do
    {
        let value = "";
        if ( y % 3 == 0)
        {
            value += "FIZZ";
        }
        if (y % 5 == 0)
        {
            value += "BUZZ";
        }
        console.log(`${y} ${value}`);
    } while (y <= 100);

//Exercise 4//Math.random generates a number between 0 and 1. Math.floor generates a random integer between 0 and 9. Math.round rounds to the nearest whole number.

    let foundNumber = Math.round(Math.random() * 500);//generates a random number between 0 and 500.
    let n = Math.round(Math.random() * (500 - 100) + 100);//generates a random number between 100 and 500. Make sure to write out mathematical equations that make logical sense, and don't yield weird outcomes, like negative numbers. Else, you may encounter runtime errors that aren't even registering as such.... nothing will print to the console, and between VS Code and the google inspector dev tools, you don't know why the script isn't performing as intended.
    for (let i = 1; i <= n; i++)//if i happens to parse through the length of n, and encounters foundNumber first, then i will be equal to foundNumber. If i parses through the length of n and does not encounter i at all, the i is not equal to foundNumber.
    for (let i = 1; i <= n && !foundValue; i++)//while i parses through the length of n and does not equal foundValue, i increments by 1. foundValue acts as a Boolean in this case, and perhaps its default value is true, if we're writing the conditional so that i isn't equal to it right off the bat.
    // {
    //     foundValue = i == foundNumber;//apparently, foundValue also acts as what's known as a comparison value, which seems to suggest that its value will be true or false.
    // }
    {
        console.log(i);//if i has arrived at an index that is equal to foundNumber before arriving at the final index of n.
        if (i == foundNumber)
        {
            console.log(`The number ${foundNumber} has been located within the range of 0 - ${n}.`);
            break;//we can exit the program without considering the next if statement.
        }

        if (i == n)//if i has arrived at the very last index of n and it isn't equal to foundNumber.
        {
            console.log(`The number ${foundNumber} was not discovered within the range of 0 - ${n}.`);
        }
    }

//Exercise 5//Math.Random technically provides a random number between 0 and another number you specify, without ever actually including that number, but to the one before it with tons of nines behind its decimal. Example: Math.random() * 10 == 0 - 9.99999999.... Math.random() * 500 == 0 - 499.999999999

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

// for (let i = start; i <= end; i++)//this can be a quick checker to see how the lists of numbers are generating.
// {
//     console.log(i);
// }

for (let i = start; i < end; i++)
{
    // let yield = "";//man, why does my chosen variable 'yield' have to be an already picked reserved word in javascipt....

    // if (i % fizzDivisor == 0)
    // {
    //     yield += "FIZZ";
    // }

    // if (i % buzzDivisor == 0)
    // {
    //     yield += "BUZZ";
    // }
    let output = "";

    if (i % fizzDivisor == 0)
    {
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0)
    {
        output += "BUZZ";
    }
    console.log(`${i} ${output}`);
}
console.log(fizzDivisor, buzzDivisor);//so that we can see what random numbers each variable had selected each time the program is run.

