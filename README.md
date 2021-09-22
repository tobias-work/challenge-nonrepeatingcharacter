# Find the first non-repeating character
**Language:**   JavaScript

**Author:**     Tobias Andersen
 
**[Try on JSFiddle!](https://jsfiddle.net/xf06wups/)**
 
## Description
Playing around with the common algo challenge of finding the first non-repeating character
in a given string while only traversing the string up to the point a non-repeating character is detected on the second pass

Iteration count is equal to the amount of characters until detection plus string length, or twice the string length if none found

Using string functions such as charAt and indexOf was decided against due to it's invocation being necessitated for each character in the string until returning, and as such I deemed it too performance intensive compared to simply looping through the string two times.

## Common pitfalls
A big part of this kind of challenge is determining whether or not a developer is able to thoroughly examine the task before it is worked on.

It is all too easy to end up writing a function that returns the first non-*consecutive* character, which is a [wholly different function](https://jsfiddle.net/a1dmrt9o/)

## Algorithm
```javascript
/* Verbose version solving the common algo of finding the first non-repeating character */
const firstNonRepeatingCharacter = (string) => {
  
  // Init lookup object
  let object = {}
  
  // Pass through string once counting the character occurences
  for (index in string) {
    // Add 1 to the count, if character not counted before default the pre-count value as 0
    object[string[index]] = ( object[string[index]] || 0 ) + 1
  }

  // Second pass through the string, return the function as soon as a single count has been detected.
  // This relies on the fact that the object properties are sorted by order of insertion,
  // so the first occurence is therefore the first non-repeating character
  for (character in object) {
    if (object[character] === 1) return character
  }

  // If function did not return earlier, return false to indicate no non-repeating characters
  return false
}

/* Minified version solving the common algo of finding the first non-repeating character */
const u =(s)=>{let o={};for(i in s){o[s[i]]=(o[s[i]]||0)+1};for(c in o){if(o[c]===1)return c}return false}
```

## Example inputs and outputs
```javascript
"ssssdddKKKKjjjjwwww!wwwweskjdjfhkjwh" = "!"
```

```javascript
"aaassslllkjdoiqwjsdkjlqwe" = "o"
```

```javascript
"aaaaaaaaakkkkkkkkkkkkkkwwwwwwwwwwwjjÆÆøøåååå" = false
```

## Notes
`for in` Object keys are sorted chronologically, but grouped depending on whether the property key name can be parsed as a number, a string or a symbol, respectively.
