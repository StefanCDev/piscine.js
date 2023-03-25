import fs from "fs";

function reverseVeryDisco(word) {
  const len = word.length;
  const halfLen = Math.floor(len / 2);
  const firstHalf = word.slice(0, halfLen);
  const secondHalf = word.slice(halfLen);
  return secondHalf + firstHalf;
}

const filePath = process.argv[2];

if (filePath) {
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      return;
    }

    const words = data.split(" ");
    const output = words.map(reverseVeryDisco);
    const input = output.join(" ");
    console.log(input);
  });
} else {
  console.error("Please provide a file path argument");
}