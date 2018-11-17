
function range(index, final) {
  let result = [];
  for(let i = index; i <= final; i++) {
    result.push(i);
  }
  return result;
}

console.log(range(1, 5));

function range(index, final, step = 1) {
  let result = [];
  if(index < final) {
    while(index <= final) {
      result.push(index);
      index += step;
    }
    return result;
  } else {
    while(index > final) {
      result.push(index);
      index += (step);
    }
    return result;
  }

}

console.log(range(1,10));
