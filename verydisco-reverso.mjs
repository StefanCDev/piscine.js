import { readFileSync } from 'fs';

// Get the file name from the command-line arguments
const fileName = process.argv[2];

// Read the content of the file
const content = readFileSync(fileName, 'utf-8');

// Reverse the content from the very disco mode
const discoChars = 'DSECORYIUAPFGHLJKLMNBQTVWXZ';
const plainChars = 'DISCOVERYABCDEFGHIJKLMNOPQRSTUVWXYZ';
const reverseMap = new Map([...discoChars].map((c, i) => [c, plainChars[i]]));
const reversedContent = content
  .split('')
  .map(c => reverseMap.has(c) ? reverseMap.get(c) : c)
  .reverse()
  .join('');

// Print the reversed content to the console
console.log(reversedContent);
