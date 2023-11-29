
  
  // Get function implementation
  function get(key) {
    return sourceObject[key];
  }
  
  // Set function implementation
  function set(key, value) {
    sourceObject[key] = value;
    return value;
  }

  // Get the 'name' property from the sourceObject
const name = get('name');
console.log(name); // Output: 'John'

// Update the 'age' property of the sourceObject to 35
const age = set('age', 35);
console.log(age); // Output: 35

// Verify that the 'age' property was updated in the sourceObject
console.log(sourceObject.age); // Output: 35
