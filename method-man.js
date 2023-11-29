// Function to split a string by spaces and return an array of substrings
function words(str) {
    return str.split(" ");
  }
  
  // Function to join an array of strings with spaces and return a single string
  function sentence(arr) {
    return arr.join(" ");
  }
  
  // Function to convert a string to upper case
  function yell(str) {
    return str.toUpperCase();
  }
  
  // Function to surround a string in asterisks and convert it to lower case
  function whisper(str) {
    return "*" + str.toLowerCase() + "*";
  }
  
  // Function to capitalize the first letter of a string and convert the rest to lower case
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const myString = "hello world";
const myArray = ["hello", "world"];

const myWords = words(myString);        // returns ["hello", "world"]
const mySentence = sentence(myArray);   // returns "hello world"
const myYell = yell(myString);          // returns "HELLO WORLD"
const myWhisper = whisper(myString);    // returns "*hello world*"
const myCapitalize = capitalize(myString); // returns "Hello world"
