let straws = 3
let apples = 2
let limes = 2
let peach = 1
let pears = 2
 
let array = ["straws", "straws", "straws", "apples", "apples", "limes", "limes", "peach", "pears", "pears"]
 
function getBasketContent() { 
return array
 
}
 
console.log(array.length)

// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}
