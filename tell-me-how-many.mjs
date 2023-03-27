// tell-me-how-many.mjs
import fs from 'fs/promises';
import process from 'process';
import path from 'path';

// Main function to read the directory and count the number of entries
async function main() {
  // Get the directory path from the command line or use the current directory
  const dirPath = process.argv.length > 2 ? process.argv[2] : '.';

  try {
    const resolvedPath = path.resolve(dirPath);
    const entries = await fs.readdir(resolvedPath);
    const entryCount = entries.length;

    console.log(entryCount);
  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

main();
