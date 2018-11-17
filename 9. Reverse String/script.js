
function cut(input) {
  arrayCut = [];
  for(let i = input.length-1; i >= 0; i--) {
    arrayCut.push(input[i]);
  }
  return arrayCut;
}

let arrayValue = [1, 2,3,4,5];

console.log(cut(arrayValue));
