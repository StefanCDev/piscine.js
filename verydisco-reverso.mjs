import { readFileSync } from 'fs';

const discoChars = 'DSECORYIUAPFGHLJKLMNBQTVWXZ';
const plainChars = 'DISCOVERYABCDEFGHIJKLMNOPQRSTUVWXYZ';
const reverseMap = new Map([...discoChars].map((c, i) => [c, plainChars[i]]));

const reverseVeryDisco = content =>
  content
    .split('')
    .map(c => reverseMap.has(c) ? reverseMap.get(c) : c)
    .reverse()
    .join('');

const filePath = process.argv[2];
const content = readFileSync(filePath, 'utf8');
console.log(reverseVeryDisco(content));
