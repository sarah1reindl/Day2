 fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function getFruitByIndex(index) {
    
    if (index === -1) {
        return fruits[fruits.length - 1];
    }
    
    if (index < 0 && index >= fruits.length) {
        return null;
    }
    
    return fruits[index];
    displayResult(result)
}

let result=getFruitByIndex("4")


console.log (result)
