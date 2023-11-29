function first(input) {
  if (typeof input === 'string' || Array.isArray(input)) {
    return input[0];
  }
  return undefined;
}

function last(input) {
  if (typeof input === 'string' || Array.isArray(input)) {
    return input[input.length - 1];
  }
  return undefined;
}

function kiss(input) {
  if (typeof input === 'string' || Array.isArray(input)) {
    return [input[input.length - 1], input[0]];
  }
  return undefined;
}
