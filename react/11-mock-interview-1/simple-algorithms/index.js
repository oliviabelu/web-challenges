// Find the maximum
function maxOfTwoNumbers(num1, num2) {
  // TODO:
  return num1 > num2 ? num1 : num2;
}

// Find the longest word

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  // TODO:
  let longestWord = "";

  if (words.length === 0) {
    return null;
  }
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

// Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  // TODO:
  /*
  - variable anlegen, mit Startwert 0
  - array durchlaufen
  - jedes Element auf die Summe der vorherigen Elemente addieren
  - Endsumme über den return value übergeben
  */
  let sum = 0;

  numbers.forEach((number) => {
    sum = sum + number;
  });

  return sum;
}

// Calculate the average length of the words

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];

function averageWordLength(words) {
  // TODO:
  /*
  - durchschnittliche Wortlänge = Summe aller Wortlängen geteilt durch Anzahl der Wörter
  - variable für Summe aller Wortlängen definieren
  - das Wortarray durchlaufen und jede Wortlänge zur Summe addieren
  - Summe durch Anzahl der Worte (=Länge des Arrays) teilen
  - diesen Wert zurückgeben
  */

  if (words.length === 0) {
    return null;
  }
  let wordLengthSum = 0;

  words.forEach((word) => {
    //console.log(word, word.length, wordLengthSum);
    wordLengthSum += word.length;
  });

  return wordLengthSum / words.length;
}

console.log(averageWordLength(words2));

// Unique arrays - return an array without duplicates

const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(words) {
  // TODO:
  /*
  - mit includes kann man prüfen, ob ein Element in einem Array vorhanden ist
  - neues, leeres Array definieren
  - words array durchlaufen
  - prüfen, ob aktuelles Element schon vorhanden ist
  - falls nein, Element in neues Array hinzufügen (falls ja, weiter)
  - neues Array zurückgeben
  */

  let newArray = [];

  words.forEach((word) => {
    if (!newArray.includes(word)) {
      newArray.push(word);
    }
  });

  return newArray;
}

// Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(haystack, needle) {
  // TODO:
  /*
  - return true oder false
  - wenn needle in haystack vorhanden, dann true, sonst false
  - mit include
  */
  return haystack.includes(needle);
}

// Count repetition

const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(haystack, needle) {
  // TODO:
  /*
  - return ist eine Zahl (wie oft needle in haystack vorkommt)
  - counter definieren, mit 0 initialsieren
  - haystack durchlaufen
  - wenn aktuelles Element mit needle übereinstimmt, counter um eins erhöhen
  - return counter
  */
  let counter = 0;

  haystack.forEach((element) => {
    if (element === needle) {
      counter++;
    }
  });

  return counter;
}

// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false,
];

function sum(array) {
  // TODO:
  /*
  - Variable für Summe definieren und mit 0 initialisieren
  - array durchlaufen
  - Fall String: length ermitteln
  - Fall boolean: true = 1, false = 0
  - Fall number: als Zahl verwenden
  - Wert jedes Elements auf Summe addieren
  - Summer zurückgeben
  */
  let sum = 0;

  array.forEach((element) => {
    switch (typeof element) {
      case "number":
        sum += element;
        break;
      case "string":
        sum += element.length;
        break;
      case "boolean":
        if (element === true) {
          sum++;
        }
        break;
    }
  });

  return sum;
}

// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];
console.clear();
function calculateProduct(val1, val2, val3, val4) {
  return val1 * val2 * val3 * val4;
}

function greatestProduct(matrix) {
  // TODO:
  /*
  - variable für Produkt definieren und mit 0 initialisieren
  - array einmal "horizontal" durchlaufen
  - Array einmal "vertikal" durchlaufen
  - meine Regel: Ende ist:
      - horizontal immer das Ende eines Subarrays, also nicht zeilenübergreifend
      - vertikal immer das letzte Subarray
  horizontal
  - d.h. erstes Produkt aus Elementen des ersten Subarrays mit Index 0 - 3,
  zweites Produkt Index 1 - 4, drittes Produkt Index 2 - 5 , usw.
  - bis Index 16 - 19
  - dann zweites Subarray durchlaufen
  - dabei immer das Produkt überschreiben, wenn es größer ist als das initiale oder vorher gespeicherte
  vertikal
  - erstes Produkt aus der ersten 4 Elementen der ersten vier Subarrays mit Index 0
  - zweites Produkt aus den 4 Elementen der nächsten (2.- 5.) Subarrays mit Index 0
  - bis Subarrays 17 - 20 (bzw. bis length of Array)
  */

  let product = 0;
  let calculatedProduct = 0;
  let subarray2 = [];
  let subarray3 = [];
  let subarray4 = [];
  //index counter, x for horizontal (index of subarray index), y for vertical (index of subarray)
  // let x = 0;
  // let y = 0;

  matrix.forEach((subarray, index) => {
    //horizontal
    for (let x = 0; x < subarray.length - 3; x++) {
      calculatedProduct = calculateProduct(
        subarray[x],
        subarray[x + 1],
        subarray[x + 2],
        subarray[x + 3],
      );
      console.log(
        "horizontal: index: " +
          index +
          " x: " +
          x +
          " calculated Product: " +
          calculatedProduct,
      );
      if (calculatedProduct > product) {
        product = calculatedProduct;
      }
    }

    //vertikal, nur bis zur viertletzten "Zeile"
    if (!(index > matrix.length - 4)) {
      subarray2 = matrix[index + 1];
      subarray3 = matrix[index + 2];
      subarray4 = matrix[index + 3];
      for (y = 0; y < subarray.length; y++) {
        calculatedProduct = calculateProduct(
          subarray[y],
          subarray2[y],
          subarray3[y],
          subarray4[y],
        );
        console.log(
          "vertical: index: " +
            index +
            " y: " +
            y +
            " calculated Product: " +
            calculatedProduct,
        );
        if (calculatedProduct > product) {
          product = calculatedProduct;
        }
      }
    }
  });
  return product;
}

const matrixTest = [
  [1, 2, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 4, 3, 2, 1],
];

console.log("greatest product: " + greatestProduct(matrix));

module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct,
};
