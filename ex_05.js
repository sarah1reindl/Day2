function getBasketContent() {
    let fruits = [];

    fruits.push("strawberry");
    fruits.push("strawberry");
    fruits.push("strawberry");
    fruits.push("apple");
    fruits.push("apple");
    fruits.push("lime");
    fruits.push("lime");
    fruits.push("peach");
    fruits.push("pear");
    fruits.push("pear");

    let totaldefruits = fruits.length;

    console.log("Total: " + totaldefruits + " fruits"); 
    
    return fruits; 
}


getBasketContent(); 



// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}
