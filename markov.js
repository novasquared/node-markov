"use strict";
/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    // console.log(words);
    this.words = words;
    let wordChains = this.makeChains();
    this.wordChains = wordChains;
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {

    let chains = {};

    for (let i = 0; i < this.words.length; i++) {
      if (!chains[this.words[i]]) {
        chains[this.words[i]] = [this.words[i + 1] || null]
      } else {
        chains[this.words[i]].push(this.words[i + 1] || null);
      }
    }
    return chains;
  }

  /** return random text from chains */


  getText(numWords = 100) {

    // construct text from make chains.
    //get length chains.keys.
    // generate a random number to pick first word
    // find the length of the array for the key we picked
    // generate a random number to pick the next word if length > 1
    // repeat until we get a null to end the sentence.

    const numKeys = Object.keys(this.wordChains).length;

    let text = '';
    let wordsCount = 0;
    while (wordsCount < numWords) {
      let words = [];
      let rand = Math.floor(Math.random() * numKeys)
      // console.log("rand", rand)
      let firstWord = Object.keys(this.wordChains)[rand]
      // console.log("firstWord", firstWord)
      words.push(firstWord)
      wordsCount++

      // another loop
      // once you pick the "nextWord", that becomes the new first word
      // repeat this loop until null
      // once null, repeat the process of picking a new "firstWord"

      while (firstWord !== null) {
        let wordArrLength = this.wordChains[firstWord].length
        let nextWordRand = Math.floor(Math.random() * wordArrLength)
        let nextWord = this.wordChains[firstWord][nextWordRand]
        if (nextWord !== null) {
          words.push(nextWord);
          wordsCount++;
        }
        if (wordsCount > numWords) {
          break
        }
        firstWord = nextWord
      }
      let sentence = words.join(" ") + ". ";
      text += sentence;
    }
    return text;

  }
}


let mm = new MarkovMachine("the cat in the hat");
let machineText = mm.getText();
console.log(machineText)

