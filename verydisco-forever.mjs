#!/usr/bin/env node

const fs = require('fs');

const args = process.argv.slice(2);

function veryDisco(str) {
  return str.split(' ')
            .map(word => {
              const mid = Math.ceil(word.length / 2);
              const firstHalf = word.slice(0, mid);
              const secondHalf = word.slice(mid);
              return secondHalf + firstHalf;
            })
            .join(' ');
}

const result = veryDisco(args[0]);

fs.writeFile('verydisco-forever.txt', result, (err) => {
  if (err) throw err;
  console.log('Result written to verydisco-forever.txt');
});
