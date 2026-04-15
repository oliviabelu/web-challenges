console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

const passwordCompare = receivedPassword === SUPER_SECRET_PASSWORD;

if (passwordCompare) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

// const unevenNumber = 6 % 2;
// console.log(unevenNumber);
// if (unevenNumber) {
//   console.log("odd number");
// } else {
//   console.log("even number");
// }

if (number & 2) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let price;

if (numberOfHotdogs < 5) {
  price = "2,00";
} else if (numberOfHotdogs < 100) {
  price = "1.50";
} else if (numberOfHotdogs < 1000000) {
  price = "1,00";
} else if (numberOfHotdogs > 1000000) {
  price = "0.10";
}
console.log("Price per hotdog: " + price + " €");
// Part 4: Daytime
const currentHour = 12;

let statement = "";

statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archy";

const greeting = "Hello " + (userName === "Klaus" ? "Klaus" : userName) + "!";

console.log(greeting);
