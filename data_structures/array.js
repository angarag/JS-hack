//Initialize array
let arr = new Array(7);
arr = [];

//Create array from map
//arr = Array.from(myMap.keys());
Array.every(condition):boolean
Array.call(condition):boolean
//Add new element to the beginning
arr.unshift(Math.random(7));

//Add to the end
arr.push(7);

//Remove first element
arr.shift();

//Join arrays and return new array
arr = arr.concat([9, 9, 9],[8,8]);

//Slice return selected elements as new array: array.slice(start, end), end not included
const new_arr = arr.slice(0, 2).reverse();
//Splice array works in original array;adds/removes items to/from an array, and returns the remaining item(s).
//add before the index
array.splice(index, howmany, new_item1, ....., new_itemX) //if howmany=0, new items to be inserted

//Iterate
arr.forEach(element => {
  console.log(element); //result.push(false)
});
//Map and Filter
const mm=numbers.map(isEven);
const nn = numbers.filter(aFilter);

for (item of arr) console.log(item);
for (index in arr) console.log(arr[index]);

//Sort
arr.sort((k, v) => v - k);

//Add/Remove
//arr.splice(index, howManyToBeRemoved, itemsToBeAdded,...,itemX);

const email = "angarag@gmail.com";
arr = email.split("@");

//Sum
arr.reduce((sum, value) => sum + value, 0);
//Min/Max
const arrMax = arr => Math.max(...arr);
const arrMin = arr => Math.min(...arr);

//toString
let s1 = arr1
  .toString()
  .split(",")
  .join("");


  //9 ways to delete element from array
  //https://love2dev.com/blog/javascript-remove-from-array/
