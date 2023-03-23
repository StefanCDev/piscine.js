import { readFile } from 'fs/promises';

async function reverseVeryDisco(filePath) {
  const content = await readFile(filePath, 'utf8');
  const words = content.split(' ');
  const reversedWords = words.map((word) => {
    const halfLength = Math.ceil(word.length / 2);
    const firstHalf = word.slice(0, halfLength);
    const secondHalf = word.slice(halfLength);
    return `${secondHalf}${firstHalf}`;
  });
  const reversedContent = reversedWords.join(' ');
  console.log(reversedContent);
}

const filePath = process.argv[2];
reverseVeryDisco(filePath);
