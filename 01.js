
// function of finding ancestors and offspring:

let generationArray = [
{ id: -3, generation: { m: "great grandfather", f: "great grandmother" } },
{ id: -2, generation: { m: "grandfather", f: "grandmother" } },
{ id: -1, generation: { m: "father", f: "mother" } },
{ id: 0, generation: { m: "me!", f: "me!" } },
{ id: 1, generation: { m: "son", f: "daughter" } },
{ id: 2, generation: { m: "grandson", f: "granddaughter" } },
{ id: 3, generation: { m: "great grandson", f: "great granddaughter" } },
];

function findingAncestorAndOffspring(id, gender) {
    let result = generationArray.find((item) => 
    item.id === id).generation[gender];
    return result;
}
console.log(findingAncestorAndOffspring(3, "f"));

    