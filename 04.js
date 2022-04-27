
//Write a Function that gets the name of the Most Expensive Piece of Jewellery:

let mostExpensive = {
    'Silver Bracelet':280,
    'Gemstone Earrings':180,
    'Diamond Ring': 3500,
} 
function findMostExpensive(object){
    let values = Object.values(mostExpensive);
    let high = Math.max(...values);
    let result = Object.keys(mostExpensive).find(key => mostExpensive[key] === high)
    return `"The most expensive one is the ${result}"`
}
console.log(findMostExpensive());

