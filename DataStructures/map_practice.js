/* 
A map object iterate its elemes in insertion order. A for...of loop returns 
an array of [key, value] for each iteration 
*/
const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

for (let el of map1) {
    console.log(el); // ['a', 1] , ['b', 2], ['c', 3]
}

//Equality is based on the same-value-zero quality
//Similar to same - value equality, but + 0 and - 0 are considered equal.

//Parsing and Stringifying MAPS with reviver and replacer secondary arguments
function replacer(key, value) {
    if (value instanceof Map) {
        return {
            dataType: 'Map',
            value: [...value]
        };
    } else {
        return value;
    }
}

function reviver(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}

//Usage
const originalValue = [
  new Map([
    [
      'a',
      {
        b: {
          c: new Map([['d', 'text']]),
        },
      },
    ],
  ]),
];

const str = JSON.stringify(originalValue, replacer);
const newValue = JSON.parse(str, reviver);
console.log(str, newValue);

//Built in Size accessor property returns the number of elements in a Map. Returns an integer

console.log(map1.size);

//Instance Methods
/* 
Map.prototype.set(key, value)
Sets the value for the key in the Map object. Returns the Map object.
*/

const map2 = new Map();
map2.set('blag', 5);
map2.set('barge', 'marge')
/* 
Map.prototype.delete(key)
Returns true if an element in the Map object existed and has been removed, or false if the element does not exist. Map.prototype.has(key) will return false afterwards.
*/
console.log(map2.delete('barge'));


console.log(map2);

const swapMap = new Map()
for (let [key, value] of map1) {
    console.log(key + ' = ' + value);
    swapMap.set(value, key)
}
console.log(swapMap);

const clone = new Map(map1);
console.log(map1, clone);


var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

const frequencyCounter = arr.reduce((acc, el) => {
    return acc.set(el, (acc.get(el) || 0) + 1)
}, new Map());

console.log(frequencyCounter);

/* 
Use map.keys() to get unique elements

Use map.values() to get the occurrences

Use map.entries() to get the pairs [element, frequency]
*/

let uniqueElements = frequencyCounter.keys();
console.log(...uniqueElements)

let occurrences = frequencyCounter.values();
console.log(...occurrences);

let pairs = frequencyCounter.entries();
console.log(...pairs);
// Also can iterate over with a for ... of loop

