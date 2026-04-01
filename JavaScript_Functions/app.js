//console.log("Hello World!\n==========\n");//just now noticed that JavaScript doesn't seem to require any user directives?
//feel free to comment out individual exercises to run them separately, or leave them all uncommented and have them run simultaneously.
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
console.log('');

function generateOdds(number)
{
    for (let i = 1; i <= number; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }
    }

    for (let i = -1; i >= number; i--)//I would've thought that you'd need a checker in this instance, so as to check for whether a number input in this function is negative or not, but obviously that's not needed.... but I understand why now -- here, we tell what number the function being called will pass through it; if this were a more enhanced function, say giving the user of the program an option to input a number of their choosing, perhaps then a checker would be needed? Or actually.... no, don't think that would be necessary either, but that's not a bad way to go about creating the same outcomes.
    {
        if (i % 2 != 0)
        {
            console.log(i);
            Math.abs
            Math.sign
        }
    }
}

function generateAbsoluteOddsWithSign(number)//this method never actually counts in two different directions; only increments in one direction, but if the input for the function is negative, it converts that input to positive, then increments it based on the input, and then checks to have the original positive or negative value of the input tagged back on whatever the number input was, and consequently all of its printed odd numbers, between its value and zero.
{
    for (let i = 1; i <= Math.abs(number); i++)
    {
        if (i % 2 != 0)
        {
            console.log(i * Math.sign(number))
        }
    }
}

generateOdds(10);
//generateOdds();//this gets called, but it doesn't pass its expected parameter because it wasn't given one.... in C#, this would throw an error at compile time, before run time. Here in JavaScript, it does not appear to throw an error during compile time or run time.... why?
generateOdds(100);
generateOdds(-200);//whatever's passed in here could be what a user inputs as well, so no checkers for negatives or positives would be needed in this instance.
generateAbsoluteOddsWithSign(-600);
generateAbsoluteOddsWithSign(872);//Math.abs converts whatever the number input inside of a variable to a positive value, regardless of whether it's positive or negative. Math.sign stores and maintains and applies the number's input value, whatever it was originally.

console.log('');//has to be written in this format for spacing, not as console.log(); else it won't register in the console.

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function ageChecker(name, age)
{
    let tooOldString = `Well, ${name}'s quite elderly, aren't they? ${age} years of age is Certainly old enough to drive.`;
    let tooYoungString = `Oof, tough luck ${name}, local legislation suggests you'll need to wait ${16 - age} more years before you can drive. What were you thinkin' at ${age} years of age?`//${yearsToWait}
    let oldEnoughString = `Alright, ${name}, you're actually old enough to drive. You didn't lie about being ${age} years of age, right?`

    if (age < 16)
    {
        console.log(tooYoungString);
    }
    else if (age > 50)
    {
        console.log(tooOldString);
    }
    else
    {
        console.log(oldEnoughString);
    }
}

ageChecker("Marvin", 58);
ageChecker("Daisy", 9);
ageChecker("Garfunkle", 30);
ageChecker("Derp", 97);
ageChecker("Maven", 17);
ageChecker("Gloria", 42);
ageChecker("Barnaconda", 13);

console.log('');

//pure function variant;

function ageCheckerSupreme(age,targetAge)
{
    return age >= targetAge;//simply means that the age parameter has to return a value that is greater than equal to the targetAge parameter in order to meet the function's conditions.
}

function ofAge(name, age)//function ofAge(age, targetAge)//no wonder the 'name' parameter was being labeled as deprecated by VS Code here.... it hadn't even bee defined as a parameter of the function initially. I'm guessing that the recursive bug I'd had previously associated with this function was due to having the same parameter type listed twice in the function's definition? Updated; yes.... but because the entire script for the function as to be written in a way where the age checker is designed to serve as its own function inside the context of another function....
{//can reuse the 'age' parameter in this function because it's only used within the function above; not globally, though it could actually be reused in a global manner as well. Regardless, since these two 'age parameters are mutually exclusive to each other, we can use them time and again, even in the exact same way.
   let canDrive = ageCheckerSupreme(age,  16); // let canDrive = ofAge(name, 16);// let canDrive = ofAge(age, 16);
   let canHavePermit = ageCheckerSupreme(age, 15);// let canHavePermit = ofAge(name, 15);// let canHavePermit = ofAge(age, 15);
   let canDrink = ageCheckerSupreme(age, 21); // let canDrink = ofAge(name, 21);// let canDrink = ofAge(age, 21);

    if (canDrink)//strange, an iteration statement that doesn't require a condition? Wait.... do the parameters of this function act as Booleans?
    {
        console.log(`${name} can drink, and is also old enough to drive.`);
    }
    else if (canDrive)
    {
        console.log(`${name} can drive on their own.`);
    }
    else if (canHavePermit)
    {
        console.log(`${name} can drive with another licensed driver.`);
    }
    else
    {
        console.log(`${name}'s too young to drink, drive, or have a permit.`);
    }
}

console.log('');

ofAge("Rex", 15);
ofAge("Buck", 11);
ofAge("Femi", 24);
ofAge("Rambler", 16);
//ofAge(20, 16);

console.log('');

//Exercise #3

function checkQuadrant(x, y)
{
    if (x > 0 && y > 0)
    {
        return 'Quadrant 1';
    }
    else if (x < 0 && y > 0)
    {
        return 'Quadrant 2';
    }
    else if (x < 0 && y < 0)
    {
        return 'Quadrant 3';
    }
    else if (x > 0 && y < 0)
    {
        return 'Quadrant 4';
    }
    else if (x == 0 && y != 0)
    {
        return 'Y Axis';
    }
    else if (x != 0 && y == 0)
    {
        return 'X Axis';
    }
    else
    {
        return "Origin";//should return a value of 'origin' if the function returns a null or undefined value when called.
    }
}

    // checkQuadrant(1, 1);
    // checkQuadrant(-1, 1);
    // checkQuadrant(-1, -1);
    // checkQuadrant(1, -1);

    console.log(checkQuadrant(1, 1));
    console.log(checkQuadrant(-1, 1));
    console.log(checkQuadrant(-1, -1));
    console.log(checkQuadrant(1, -1));
    console.log(checkQuadrant(0, -1));
    console.log(checkQuadrant(1, 0));
    console.log(checkQuadrant(0, 0));
    console.log(checkQuadrant(21, 1));
    console.log(checkQuadrant(-21, 1));
    console.log(checkQuadrant(-1, -21));
    console.log(checkQuadrant(1, -21));

    console.log('');

//Exercise #4

function checkTriangleValidity(a, b, c)
{
    return a + b > c && a + c > b && b + c > a;//suggests that at least two lines of any given triangular shape must be greater than one line. Fundamentally speaking, if this weren't true, a triangle would not be possible. You could even try to visualize this in your head, and it would be impossible.
}

function determineTriangle(a, b, c)
{
    let isValid = checkTriangleValidity(a, b, c);
    if (isValid)
    {
        if (a == b && b == c)
        {
            return 'Type Equilateral Triangle.'
        }
        else if (a == b || b == c || c == a)//(&& c != a) -- not necessary, but makes logical sense. Let me rewrite it anyway -- else if (a == b && c !== a) {return 'Type Isosceles Triangle.'}. else if (a == b && c !== b) {return 'Type Isosceles Triangle.'}.
        {
            return 'Type Isosceles Triangle.'
        }
        else//don't need to define what a scalene triangle is here, since we have only 3 declared variables defining a shape that only requires 3 lines [variables] to define in this context.
        {//let me pretend like I was going to define a scalene triangle here -- else if (a!= b && b != c && c !=a){return 'Type Scalene Triangle.'}. Oh wait, this has the potential return a value of undefined, doesn't it? Because, what if a and b are less than c? Regardless of whether or not they are equal to one another?
            return 'Type Scalene Triangle.'
        }
    }
    else
    {
        return 'Not a valid Triangle -- reason is because two of the attempted triangle`s lines yield a value that is equal to or less than its third line`s value. To successfully craft a triangle; it doesn`t matter in what order you place its lines or if one or more of them are equal to each other, or if they`re all of different values.... only that it`s longest side yields a value that is less than the sum of its other two sides.'//this code block by itself would be enough to suffice for explanations as to why potential value inputs for this function don't logically generate a triangle.
    }
}

console.log(determineTriangle(7,6,4));
console.log(determineTriangle(7,7,7));
console.log(determineTriangle(7,3,1));//b and c are not greater than a, regardless of variable order, therefore return undefined -- Not a valid triangle.
console.log(determineTriangle(2,2,4));//a and b are not greater than c, therefore return undefined -- Not a valid triangle.
console.log(determineTriangle(7,5,5));//b and c are equal to each other, and are greater than a, therefore return isosceles.

console.log("");

//Exercise #5

/*--Start with what's expected, as printed below;
15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.
*///then, define some variables based upon the expected output.... planLimit, day, usage.

function dataUsageInfo(planLimit, day, usage)//day represents number of days, usage represents amount of data, planLimit I believe is expressed in the format of days.... so we cannot expressly use planLimit as a variable to be directly compared to usage.... only day.
{//actually no.... all three of these variables being passed into this function as parameters are all numerical in value, and can be defined as such through their implementation, so let me try writing out some other variables containing more direct references to planLimt versus usage.
    let periodLength = 30;//month.
    let currentAverage = usage / day;//would it make more sense to explicitly type in variables such as planDataLimit and planDayLimit? Instead of having only planLimit?
    let currentDataUsed = day * (planLimit/periodLength);//make the units of measurement in gigabytes.
    let projectedAverage = planLimit / periodLength;//make the units of measurement in gigabytes.
    let remainingData = planLimit - usage;//wait, planLimit is likely being utilized in the numerical format of days, whereas we don't have data as a declared variable.... which would change things here. Updated; negative, read above.
    let remainingDays = periodLength - day;
    let projectedUsage = day * currentAverage;
    let dataUsageStatusMessage;//this doesn't appear to be necessary.
    console.log("The following is a detailed glance at what your hypothetical data usage is, regarding your smartphone's current month to month plan.");
    console.log('');
    console.log(`We like to assume the month's period to be about ${periodLength} days in total, regardless of what month it is.`);
    console.log('');
    console.log("It looks like you've already begun using your data plan.");
    console.log('');
    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining.`);
    console.log('');
    console.log(`${planLimit} gigabytes per month is youur current plan's data usage limit.`);
    console.log('');
    console.log(`Your current data used up so far this month is about ${currentDataUsed} gigabytes in total.`);
    console.log('');
    console.log(`Average projected data usage as a result of your current data usage to date: ${planLimit / periodLength} gigabytes of memory per day.`);

    if (currentAverage > projectedAverage)//over data limit.
    {
        dataUsageStatusMessage = "Current data usage per your monthly plan is exceeding its limits.";
    }
    else if (currentAverage < projectedAverage)//under data limit.
    {
        dataUsageStatusMessage = "There's still data left to be utilized within your current plan.";
    }
    else//at data limit.
    {
        dataUsageStatusMessage = "Data usage limit has been reached.";
    }

    console.log('');
    console.log(`Based on where you're at, ${dataUsageStatusMessage} for the day.`);
    console.log('');
    console.log(`If you continue to average ${planLimit/periodLength} giabytes of data usage per day for the remainder of this month, then you will have ${planLimit - (usage + projectedUsage)} gigabytes of memory remaining not only at the end of each day, but also at the end of the month!`); //(`Based on this current usage, anticipated data used up for the remainder of this month will be ${planLimit - (usage + projectedUsage)} gigabytes from your plan's limit -- which means that you're on par with your plan.`);
    console.log('');
    console.log("You may wish to consider upgrading your smartphone data plan.");
    console.log('');
    
}   
    //console.log("You know what.... we went ahead and gave you a free upgrade.... because.... you're a real cool cat, y'know?");//leaving this line of code here causes it to print before the above block of code has even been executed.... not sure why.
    dataUsageInfo(50, 15, 25);//plan limit is set at 50 gigabytes of data usage, with 15 days passed, and 25 gigabytes left to use up.
    //console.log('');//leaving this line of code here causes it to print before the above block of code has even been executed.... not sure why.

function dataUsageFeedback (planLimit2, day2, usage2)//identical function to the one written above, just more attuned to the assignment's specifications (strings).
{
    let periodLength2 = 30;
    let currentAverage2 = usage2 / day2;
    let projectedAverage2 = planLimit2 / periodLength2;
    let remainingDays2 = periodLength2 - day2;
    let projectedUsage2 = day2 * currentAverage2;
    let remainingData2 = planLimit2 - (day2 * currentAverage2);//let remainingData2 = planLimit2 - usage2;//not a bad initial thought process here.... but I developed a newer more effective variable instead of this one, on the left.

    console.log("You know what.... we went ahead and gave you a free upgrade.... because.... you're a real cool cat, y'know?");
    console.log('');
    console.log(`${day2} day(s) used, ${remainingDays2} day(s) remaining.`);
    console.log('');
    console.log(`Average projected data usage: ${planLimit2 / periodLength2} gigabytes of memory per day.`);

    if (currentAverage2 > projectedAverage2)
    {
        dataUsageStatusMessage = "EXCEEDING";
    }
    else if (currentAverage2 < projectedAverage2)
    {
        dataUsageStatusMessage = "falling short of";
    }
    else
    {
        dataUsageStatusMessage = "AT";
    }

    console.log('');
    console.log(`You are actually ${dataUsageStatusMessage} your current data plan's maximum monthly limit, as of today.`);
    console.log('');
    console.log(`You are ${dataUsageStatusMessage} your average daily use of (${currentAverage2} gigabytes per day, continuing this usage, you'll end up using ${remainingDays2 * currentAverage2} gigabytes from your plan's limit for this month, with ${remainingData2} gigabytes to spare.`);//this last bit should be amounting to a value nothing other than zero, as this is a direct reflection of what the program has been built to anticipate or calculate mathematically based on input to this function as to what the outcome would be for the month's worth of data usage, which should be all of it, nothing more, nothing less.
    console.log('');
}
dataUsageFeedback(70, 22, 20);