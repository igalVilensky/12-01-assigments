/*const hobbies = ["soccer", "music", "photo"];

let i = 0;
console.log(hobbies[i]);
i++;
console.log(hobbies[i]);
i++;
console.log(hobbies[i]);
i++;



const Name = (str) => {
  console.log(str);
}

const LastName = (str) => {
  console.log(str);
}

Name("Igal");
LastName("Vilensky");

//console.log(´${Name} ${LastName}´)
//console.log(name() + LastName());


const arr = ["igal", "vilensky"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i][0].toUpperCase()+ arr[i].substring(1)); 

}







for (i = 0; i <= 20; i++) {
  if ( i % 2 == 0) {
    console.log(`${i} is even`);
} else {
    console.log(`${i} is odd`);
}}



for (y = 100; y <= 1000; y*10) {

console.log(y);
} 

for (let i = 0; i <=10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 1; i <=15; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

text = "";
for (let i = 9; i => 9; i--)
{
  text += g + " ";
}

console.log(text); */

/*text = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 0; j < 3; j++) {
    text += i + " ";
  }
}
console.log(text);
console.log("--------");



for (let i = 1; i <= 4; i++) {
   for (let j = 0; j < 3; j++)

  console.log(i);}


  for (let i = 1; i <= 4; i++) {
    
  }

  0 1 2 3 4
  let countNum = 0;
text = "";
for (let i = 1; i <= 4; ) {
  text += i + " ";
  if (countNum !== 0 && countNum % 3 === 0) {
    i++;
    countNum = 0;
  }
  countNum++;
}
console.log(text);

// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).


for (i = 0; i <= 20; i++) {
  if ( c) {
    console.log(`${i} is even`);
} else {
    console.log(`${i} is odd`);
  }
}


// 100 200 300 400 500 600 700 800 900 1000

text = "";

for (let i = 100; i <= 1000; i+=100) {
  text += i + "" + " ";
}

console.log(text);

// 0 2 4 6 8 10

text = "";
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    // text = text + i + " ";
    text += i + " ";
  }
}
text = "";
for (let i = 0; i <= 10; i += 2) {
  text += i + " ";
}
console.log(text);

// 3 6 9 12 15

text = "";
for (i=1; i<=15; i++) {
  if (i % 3 == 0) {
    text += i + " ";
  }
}
console.log(text);


// 9 8 7 6 5 4 3 2 1 0

text = "";

for (let i = 9; i >=0; i--) {
  text += i + "" + " ";
}

console.log(text);

// 1 1 1 2 2 2 3 3 3 4 4 4

text = "";
for (let i = 1; i<=4; i++) {
  for (let j = 0; j<3; j++) {
  text += i + "" + " ";
  }
}

console.log(text);

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

text = "";
for (let i = 1; i <= 3; i++) {
  // i =2
  for (let j = 0; j <= 4; j++) {
    // j = 0
    text += j + " ";
  }
}
console.log(text);

for (let i = 0; i <= 5; i++) {
  if (i % 2 !==0) console.log(i);
}



for (let i = 0; i < 10; i++) {
  console.log(i);
} */

/*let evenOrOdd;

for (let i = 0; i <= 20; i++) {

  if (i % 2 == 0)
    evenOrOdd = "even";
  else 
    evenOrOdd = "odd";
  
  console.log(i + " is " + evenOrOdd);
} 

function dogYearsCount (dogYears) {

  let humanYears, result;
  humanYears = dogYears * 7; 

  return result = dogYears + " in dog years is " + humanYears + " in human years";

}

console.log(dogYearsCount(6));


//  0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

/* text = "";
for (let i = 1; i <= 3; i++ ) {
  for (let j = 0; j <= 4; j++) {
    text += j + " ";
  }
}
console.log(text);


*/

// 100 200 300 400 500 600 700 800 900 1000
/* text = "";

for (let i = 100; i <= 1000; i+=100) {
  text += i + " ";
}

console.log(text); */

// function footballPoints (wins, draws, losses) {
  
//   let win = 3 * wins;
//   let draw = 1 * draws;
//   let loss = 0 * losses;

//   let points = draw + win + loss;
//   return points;

// }

// console.log(footballPoints (5, 8, 5));


// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function zeroOrLess (num2) {

  return num2 <= 0;
 
}

console.log(zeroOrLess (6));


//  Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
//PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

function dogYearsCount (dogYears) {

  let humanYears, result;
  humanYears = dogYears * 7; 

  return result = dogYears + " in dog years is " + humanYears + " in human years";

}

console.log(dogYearsCount(6));


//  A Lifetime Suppl...
// You just won a lifetime supply of your favorite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". 
//Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: person age and the amount he will eats per day. 
//The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.


function lifeTimeSupplyCounter (personAge, amountOfFood) {
  
  let result; 

  if(personAge >= 100) {
    result = "You are too old for snacks";
    return result;
  } else {
    let yearsLeft = 100 - personAge;
    let countOfSnacks = (amountOfFood * 365) * yearsLeft;
    result = "The snack company should provide you with " + countOfSnacks + " units, until you are a ripe old age of 100. Happy snacking!"
    return result;
  }
    
}

console.log(lifeTimeSupplyCounter(35,1));

//  Number to Month Nam
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)


 


function numToMonth (monthNum) {
  if (monthNum > 12) {
    return "THere is only twelve months in a year your an idiot";
  }
  let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return months[monthNum - 1];

}
 
console.log(numToMonth(12));

// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:

// countOccurrences("this is a string", "i") ➞ 3
  function countOccurrences (sentence, letter) {
    let counter = 0;

    sentence = sentence.split("");
    for (let i = 0; i < sentence.length; i++) {
      
      if (sentence[i] == letter) {
        counter++;
      }
    }
    return counter;
  }

  console.log(countOccurrences("adkasdhkjasbhfkjasfd", "f"));

  /*  draw this shapes in your console
First shape
T
TT
TTT
TTTT */

let char = "T";

for (let i = 0; i < 4; i++) {
  console.log(char);
  char += "T";
  
}

let char1 = "****";

for (let i = 5; i < 9; i++) {
  console.log(char1);
  char1 = char1.substring(1);
  
}

let num = "1";

for (let i = 2; i < 7; i++) {
  console.log(num);
  num += i;
  
}


/* create a function should that checks if a store contains a specific product in it's inventory.
for example:
let storeArr= ["milk", "eggs", "cheese", "butter"];
// try includes might help :)
// Examples
inventoryCheck("cheese") returns true
inventoryCheck( "ham") returns false 
*/



function inventoryCheck(product) {
  let storeArr = ["milk", "eggs", "cheese", "butter"];
  result = storeArr.includes(product);
  return result; 
}

console.log(inventoryCheck("fuck"));


// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP






function makeid() {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;

  for ( var i = 0; i < 30; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
 console.log(makeid());

//console.log(Math.floor(Math.random() * 5));