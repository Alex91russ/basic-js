const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
    this.alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Error");
    }

    let result = [];
    message = message.toUpperCase().split("");
    key = key.toUpperCase().split("");

    while (key.length < message.length) {
      key = [...key, ...key];
    }

    let count = 0;

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        result[i] = message[i];
        continue;
      }
      result[i] =
        this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[count]);
      result[i] >= 26 ? (result[i] -= 26) : result[i];
      result[i] = this.alphabet[result[i]];

      count++;
    }

    return this.flag ? result.join("") : result.reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Error");
    }

    let result = [];
    message = message.toUpperCase().split("");
    key = key.toUpperCase().split("");

    while (key.length < message.length) {
      key = [...key, ...key];
    }
    let count = 0;

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        result[i] = message[i];
        continue;
      }

      result[i] =
        this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(key[count]);

      result[i] < 0 ? (result[i] += 26) : result[i];
      result[i] = this.alphabet[result[i]];

      count++;
    }

    return this.flag ? result.join("") : result.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
