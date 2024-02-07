// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
// Day 1
String.prototype.toJadenCase = function () {
  let words = this.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join("");
};

let inputString =
  "WaterInTheEyesAndAlcoholInTheEyesArePrettyMuchTheSameIKnowThisFromFirstHandExperience.";
let toJadenCase = inputString.toJadenCase();
console.log(toJadenCase);
