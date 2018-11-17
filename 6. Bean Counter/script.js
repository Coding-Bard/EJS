

function countBs(word) {
  let counter = "";
  for(let i = 0; i < word.length; i++) {
    if(word[i] === "B") {
      counter++;
    }

  }
  return counter;
}

console.log(countBs("BBBCBCBC"));


function countChar(word, letter) {
  let counter = "";
  for(let i = 0; i < word.length; i++) {
    if(word[i] === letter) {
      counter++;
    }
  }
  return counter;
}

console.log(countChar("kekekekek", "e"));
