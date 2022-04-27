
// function of calculating sum of people's budgets in an array of objects:

let getBudgets = [
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 } 
]
function sumOfBudgets (array) {
    let total = getBudgets.reduce(function(acc , getBudgets){
        return acc + getBudgets.budget;
    },0);
    return `sum is ${total}`;
}
console.log(sumOfBudgets(getBudgets));//62600