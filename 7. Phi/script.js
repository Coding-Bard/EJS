function phi(array) {
  return (array[3] * array[0] - array[2] * array[1]) /
  Math.sqrt((array[2] + array[3]) *
            (array[0] + array[1]) *
            (array[1] + array[3]) *
            (array[0] + array[2]));
}

console.log(phi([76, 9, 4, 1]));
