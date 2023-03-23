#!/usr/bin/env node

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

console.log(veryDisco(args[0]));
