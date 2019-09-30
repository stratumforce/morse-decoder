const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  const encodedSymbols = {
    "00": "",
    "10": ".",
    "11": "-",
    "**": " "
  };

  let symbols = [];

  // Split expr in chunks by 10
  for (let i = 0; i < expr.length; i += 10) {
    symbols.push(expr.slice(i, i + 10));
  }

  // Map through chunks and decode symbols
  symbols = symbols.map(val => {
    let sequence = "";
    for (let i = 0; i < val.length; i += 2) {
      sequence += encodedSymbols[val[i] + val[i + 1]];
    }
    return sequence;
  });

  // Decode letters and return sentence
  return symbols
    .map(val => MORSE_TABLE[val] || " ")
    .join("")
    .replace(/\s+/g, " ");
}

module.exports = {
  decode
};
