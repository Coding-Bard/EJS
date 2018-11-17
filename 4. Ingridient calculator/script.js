
function ingridientAmount(factor) {
  function ingridient(amount, measure, type) {
      let ingridients = factor * amount;
      if(ingridients > 1) {
        measure += "s";
      }
      console.log(`${ingridients} ${measure} of ${type}`);
      }

      ingridient(1, "cup", "coffee");
      ingridient(2, "spoon", "sugar");
  }


ingridientAmount(1);
