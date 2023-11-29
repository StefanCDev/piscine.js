






function slice(input, start, end) {
    // Convert input to an array if it's a string
    const arr = Array.from(input);
    
    // Get the length of the input
    const len = arr.length;
    
    // Set default values for start and end
    start = start || 0;
    end = end || len;
    
    // Handle negative start and end values
    if (start < 0) {
      start = len + start;
    }
    
    if (end < 0) {
      end = len + end;
    }
    
    // Create a new array with the sliced values
    const sliced = [];
    for (let i = start; i < end && i < len; i++) {
      sliced.push(arr[i]);
    }
    
    // Join the sliced array back into a string if the input was a string
    return typeof input === 'string' ? sliced.join('') : sliced;
  }
  