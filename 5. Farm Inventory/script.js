function farmInventory() {
  function animals(amount, animal){
  let amountString = String(amount);
  while(amountString.length < 3) {
    amountString = "0" + amountString;
  }
  if(Number(amountString) > 1) {
    animal += "s";
  }
  console.log(`${amountString}  ${animal}`);
}
  animals(3, "sheep");
animals(5, "pig");
  animals(11, "bull");
}

farmInventory();
