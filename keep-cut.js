function cutFirst(str) {
    return str.slice(2);
  }
  
  function cutLast(str) {
    return str.slice(0, -2);
  }
  
  function cutFirstLast(str) {
    return str.slice(2, -2);
  }
  
  function keepFirst(str) {
    return str.slice(0, 2);
  }
  
  function keepLast(str) {
    return str.slice(-2);
  }
  
  function keepFirstLast(str) {
    return str.length < 4 ? str : str.substring(0, 2) + str.substring(str.length - 2);
  }
  