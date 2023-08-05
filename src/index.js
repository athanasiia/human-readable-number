function numberToWord (number) {
    switch (number) {
        case '1': return "one";
        case '2': return "two";
        case '3': return "three";
        case '4': return "four";
        case '5': return "five";
        case '6': return "six";
        case '7': return "seven";
        case '8': return "eight";
        case '9': return "nine";
        default: return "";
    }
}

function elevenToNineteenToWord (number) {
    switch (number) {
        case '0': return "ten ";
        case '1': return "eleven ";
        case '2': return "twelve ";
        case '3': return "thirteen ";
        case '5': return "fifteen ";
        case '8': return "eighteen ";
        default: return numberToWord(number) + "teen ";
    }
}

function tensToWord (number) {
    switch(number) {
        case '0': return "";
        case '2': return "twenty ";
        case '3': return "thirty ";
        case '4': return "forty ";
        case '5': return "fifty ";
        case '8': return "eighty ";
        default: return numberToWord(number) + "ty ";
    }
}

module.exports = function toReadable (number) {
  let res = '';
  if (number === 0) {
    return "zero";
  }
  number += '';
  for (let i = 0; i < number.length; i++) {
    if ((number.length - i) % 3 === 0) {
        res += numberToWord(number[i]);
        res += " hundred ";
    } else if ((number.length - i) % 2 === 0 && number[i] === '1') {
        res += elevenToNineteenToWord(number[i+1]);
        i++;
    } else if ((number.length - i) % 2 === 0) {
        res += tensToWord(number[i]);
    } else {
        res += numberToWord(number[i]);
    }
  }
  return res.trim();
}