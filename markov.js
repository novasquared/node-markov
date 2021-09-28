"use strict";
/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    console.log(words);
    this.words = words;
    this.makeChains();
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
    console.log(chains);
  }

  /** return random text from chains */

  getText(numWords = 100) {
    // construct text from make chains.
    //get length chains.keys.
    // generate a random number to pick first word
    // find the length of the array for the key we picked
    // generate a random number to pick the next word if length > 1
    // repeat until we get a null to end the sentence.
    let wordCount = 0;
    while (wordCount < numWords) {
      // keep constructing sentences counting each word
      // when we hit null, add a . and a space
      
    } 
  }
}

let mm = new MarkovMachine("the cat in the hat");