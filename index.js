/*
  Language:   JavaScript
  Author:     Tobias Andersen
  
  Playing around with the common algo challenge of finding the first non-repeating character
  in a given string while only traversing the string up to the point a non-repeating character is detected

  Iteration count is equal to the amount of characters until detection, or string length if none found
*/

/* Verbose version solving the common algo of finding the first non-repeating character */
const firstNonRepeatingCharacter = (string) => {
  
  // Iterate each character from index 1, set insideSequence to false
  for (index = 1, insideSequence = false, stringLength = stringLength; index < stringLength; index++) {

    // Skip to next iteration if previous character is a repeat
    // Set insideSequence to true to indicate ongoing repetition
    if (string[index] === string[index-1]) {
      insideSequence = true
      continue
    }

    // At this point we detect a new type of character in the string
    // If the new character is directly after a non-sequence,
    // the previous non-sequence character is therefore the first non-repeating character
    if (!insideSequence) return string[index-1];

    // Reset the counter since we are starting a new potential repetition
    insideSequence = false
  }

  // If we manage to make it to the last two characters
  // we need to check if the last character is non-repeating and return it,
  // Otherwise return false to indicate no non-repeating characters found
  return string[stringLength-1] === string[stringLength-2]
    ? false
    : string[stringLength-1]
}

/* Minified version solving the common algo of finding the first non-repeating character */
const u=(s)=>{for(i=1,c=0,l=s.length;i<l;i++){if(s[i]===s[i-1]){c++;continue}if(!c)return s[i-1];c=0}return s[l-1]===s[l-2]?0:s[l-1]}

const tests = [
  "aaaaaaaaaaaaaabbbbbbbbbbbbbbbbbIkkkkkkkk",
  "lllllllllllkkkkkkkkkkkooooooooooooeeeeeeeeeddggg ",
  "iiiiijjjjjjjjuuuuuhhhææææælllKKKJJhhhuuuLoooooo",
  "aaaaaaaaaaaaaaaaaafffffffffffff222fffffnn6666nnnnnnnnnnnnn",
  "yyyyyyyyyhhhhhhhhjjjjj33KKKLLIIiiissøøøææÆÆÆÅÅååå",
  "aaabbbbccvvvvvkkkokkqqqqqæææææååååccdddeeee", 12, 354,886,
  "aaaaaaaaaaaaaaaaaaffffffffffffffffddddddddd33333337777777aaaaaaffnnnnnnnnnnnnnnn",
  "aaabbbbccvvvvvkkkvkkqqqq66qæææææååååccdddeeee",
  "aaabbbbccvvvvvkkkekkqqqqqæææææååååccdddeeee",123,5345,547,234,234,67,"aaaafffdd",
  "aaaaaaaaaaaaaaaaaaffffffffffffffffffnnnnnnnnnnnnnnn",
  "aaabbbbccvvvvvkkk kkqqqqqæ888ææææååååccdddeeee",
  "sssskkkkdddYjj",
  "aaaaaaaaaaaaaaaaaaffffffffffffffffffnnnnnnnnnnnnnnn",
  "aaaaaaaaaaakkkkkkkkkkkkkwwwww999wwwwwwwwjjjjjjjjjjjiiiiiiiiiiiiiiiolllllllllll",
  "ssssssssssssjjjjjjjjjjjjjjjudkajsldkhqowic bckjhfwieuq qwe ",
  "kkss!)()()/%)(&&&&&/(#)))((/3333)#/(",
  "aaaaaaaaaaaaaaaaaaffffffffffffffffffnnnnnnnnnnnnnnn", 12, 123, 564, 9384
]

let response = ''

for (test in tests) {
  response += u(tests[test]) || ''
}

console.log(response)
