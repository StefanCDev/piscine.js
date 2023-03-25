import { readdir } from 'fs/promises';
import { join } from 'path';

// Get the directory path from the command line arguments
const directoryPath = process.argv[2] || '/home/stefan/Stefan/01F.Projects/piscine-js-2weeks/tell-me-how-many/guests';

// Read the directory and count the entries
async function countEntries() {
  try {
    const entries = await readdir(directoryPath);
    console.log(`There are ${entries.length} entries in ${directoryPath}`);
  } catch (err) {
    console.error(err);
  }
}

countEntries();
