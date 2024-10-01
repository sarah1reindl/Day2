let array = ["strawberry", "strawberry", "lime", "lime", "peach", "pear", "pear"];

function getBasketContent(nbrOfFruit, fruits) {
  if (nbrOfFruit > fruits.length) {
    console.log("Too many fruit(s) selected.");
  } else {
    console.log(nbrOfFruit + " fruit(s) selected.");
    return fruits.slice(0, nbrOfFruit); // Returns the selected number of fruits
  }
}

// DO NOT TOUCH, this will call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
  const fruits = getBasketContent(6,array); // Example: requesting 6 fruits
  showMyBasket(fruits); // This will display the basket if you've done it well
}
