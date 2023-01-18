const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
	'**********': ' ',
};

function decode(expr) {
    let regexp1 = /\S{10}/ig;
  let input = expr.match(regexp1);
  let array = [],
      array2 = [],
      array3 = [];
  let result = "";
  input.forEach((item) => {
    let index = item.split("").findIndex((element) => element === "1");
    console.log(item);
    if (index > 0) array.push(item.slice(index));
    else array.push(item);
  });
  let regexp2 = /\S{2}/ig;
  array.forEach((item) => {
    array2.push(item.match(regexp2));
  });
  array2.forEach((item) => {
    array3.push(item.join("").replaceAll("10",".").replaceAll("11","-"));
  });
  let keys = Object.keys(MORSE_TABLE);
  let values = Object.values(MORSE_TABLE);
  array3.forEach((item) => {
    for(let j = 0; j < keys.length; j++)
      {
          if(item === keys[j]) {
            result += values[j];
          }
      }
  });
  return result;
}

module.exports = {
    decode
}