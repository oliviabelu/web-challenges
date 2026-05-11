const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  // TODO: return the longest word
  /* variable definieren "Inception", in der ich das Wort speichern kann 
    1. durch words durchlaufen
    2. für jedes word in words die Länge überprüfen
    3. vergelichen, ob die aktuelle Länge größer ist? --> wenn ja, dann das aktuelle Wort speicher, wenn nein, weiter
    4. variable als return value zurückgeben
  */
  let longestWord = "";

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

console.log(findLongestWord(words));
