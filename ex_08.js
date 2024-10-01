fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getFruit(indpara) {
    if (typeof indpara === 'string') {
        
        const index = fruits.indexOf(indpara);
           if (index === -1) {
               return null;
        }
       
    } else if (typeof indpara === 'number') {
        
        if (indpara === -1) {
            return fruits[fruits.length - 1]; 
        }
        if (indpara < 0 && indpara >= fruits.length) {
            return null; 
        }
        return fruits[indpara];
    } else {
        
    }
}
let ind=getFruit(2)
displayResult(ind)
