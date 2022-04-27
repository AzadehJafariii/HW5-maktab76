
// write a function creates an object with key & value from array 
// given and add uppercase as values of object: 


function makeObject(){
    let array = ['a', 'b', 'c', 'd'];
    let result = array.reduce(function(acc, item){
        acc[item] = item.toUpperCase();
        return acc
    }, {})
    return JSON.stringify(result);
}
console.log(makeObject());







