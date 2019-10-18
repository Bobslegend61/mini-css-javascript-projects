# JAVASCRIPT ALGORITHM CHALLENGES

1. `Minutes to Seconds`  
   Write a function that takes an integer minutes and converts it to seconds. For exapmle

```javascript
// Difficulty - VERY EASY

convert(5); // Returns 300
convert(3); // Returns 180
```

2. `Add up the Numbers from a Single Number`  
   Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

```javascript
// Difficulty - EASY

addUp(4); // Returns 10
addUp(13); // Returns 91
```

3. `No Conditionals?`  
   Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.  
   Notes
   Try completing this challenge without using any:

   - Conditionals
   - Ternary operators
   - Negations
   - Bit operators

```javascript
// Difficulty - MEDIUM

flip(0); // Returns 1
flip(1); // Returns 0
```

4. `Seven Boom!`  
   Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

```javascript
// Difficulty - HARD

sevenBoom([1, 2, 3, 4, 5, 6, 7]); // "Boom!"
sevenBoom([8, 6, 33, 100]); // "there is no 7 in the array"
sevenBoom([2, 55, 60, 97, 86]); // "Boom!"
```

5. `Find the Smallest and Biggest Numbers`  
   Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

```javascript
minMax([1, 2, 3, 4, 5]); // [1, 5]

minMax([2334454, 5]); // [5, 2334454]

minMax([1]); // [1, 1]
```

6. `Contact List`  
   Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).

```javascript
sortContacts([
  "John Locke",
  "Thomas Aquinas",
  "David Hume",
  "Rene Descartes"
], "ASC") ➞ [
  "Thomas Aquinas",
  "Rene Descartes",
  "David Hume",
  "John Locke"
]

// Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)

sortContacts([
  "Paul Erdos",
  "Leonhard Euler",
  "Carl Gauss"
], "DESC") ➞ [
  "Carl Gauss",
  "Leonhard Euler",
  "Paul Erdos"
]

// Gauss (G) > Euler (EU) > Erdos (ER)

sortContacts([], "DESC") ➞ []

sortContacts(null, "DESC") ➞ []

sortContacts(undefined, "DESC") ➞ []
```

`Notes`

- An array with a single name should be trivially returned.
- An empty array, or an input of null or undefined should return an empty array.
