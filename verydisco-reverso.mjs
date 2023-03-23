#!/usr/bin/env node

import fs from 'fs';

const args = process.argv.slice(2);

function reverseVeryDisco(str) {
  return str.split(' ')
            .map(word => {
              const mid = Math.ceil(word.length / 2);
              const firstHalf = word.slice(0, mid);
              const secondHalf = word.slice(mid);
              return secondHalf + firstHalf;
            })
            .reverse()
            .join(' ');
}


fs.readFile(args[0], 'utf8', (err, data) => {
  if (err) throw err;
  const result = reverseVeryDisco(data.trim());
  console.log(result);
});
