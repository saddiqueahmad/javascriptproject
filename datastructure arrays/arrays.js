// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.

array.shift();
'Banana'
['Apples', 'Oranges', 'Blueberries']

// 2. Sort the array in order.

['Apples', 'Oranges', 'Blueberries']
['Apples', 'Blueberries', 'Oranges']

// 3. Put "Kiwi" at the end of the array

['Apples', 'Blueberries', 'Oranges']
array.push("kiwi");
['Apples', 'Blueberries', 'Oranges', 'kiwi']

// 4. Remove "Apples" from the array.

['Apples', 'Blueberries', 'Oranges', 'kiwi']
array.shift();
'Apples'

array
['Blueberries', 'Oranges', 'kiwi']

// 5. Sort the array in reverse order.

['Blueberries', 'Oranges', 'kiwi']
array.reverse();
['kiwi', 'Oranges', 'Blueberries']

you should have at the end:
["Oranges", "Kiwi", "Blueberries"]

array.reverse();
['Blueberries', 'Oranges', 'kiwi']
array.shift();
'Blueberries'
array
['Oranges', 'kiwi']
array.push("Blueberries");
3
array
['Oranges', 'kiwi', 'Blueberries'] // hence proved

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

console.log(array2[1][1][0]);