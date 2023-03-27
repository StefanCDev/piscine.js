import fs from 'fs/promises';
import process from 'process';
import path from 'path';

async function main() {
  const dirPath = process.argv.length > 2 ? process.argv[2] : '.';
  try {
    const resolvedPath = path.resolve(dirPath);
    const entries = await fs.readdir(resolvedPath);

    const entryData = entries.map((entry) => {
      const parts = entry.split("_");
      const lastName = parts[1].slice(0, -5);
      const firstName = parts[0];
      return { lastName, firstName };
    });

    entryData.sort((a, b) => a.lastName.localeCompare(b.lastName));

    let entryCount = 0;
    for (const { lastName, firstName } of entryData) {
      entryCount++;
      console.log(`${entryCount}. ${lastName} ${firstName}`);
    }

  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

main();



// // Importing required modules
// import fs from 'fs/promises';
// import path from 'path';
// import process from 'process';

// // Function to read and parse guests from the file
// async function readGuests(filePath) {
//   try {
//     const data = await fs.readFile(filePath, 'utf-8');
//     const { lastname, firstname } = JSON.parse(data); // Updated this line
//     return { lastname, firstname };
//   } catch (err) {
//     console.error('Error reading the file:', err);
//     return null;
//   }
// }

// // Function to sort and print guests
// function printGuests(guests) {
//     guests.sort((a, b) => a.lastname.localeCompare(b.lastname) || a.firstname.localeCompare(b.firstname));
//     const guestStrings = guests.map(({ lastname, firstname }, i) => `${i + 1}. ${lastname} ${firstname}`);
//     console.log(guestStrings.join('\n')); // Updated this line
//   }
  

// // Main function
// async function main() {
//   const directoryPath = process.argv[2];

//   if (!directoryPath) {
//     console.error('Please provide a directory path as an argument.');
//     process.exit(1);
//   }

//   try {
//     const files = await fs.readdir(directoryPath);
//     const guestFiles = files.filter(file => file.toLowerCase().endsWith('.json'));

//     if (guestFiles.length === 0) {
//       console.log('No guest files found.');
//       process.exit(0);
//     }

//     let allGuests = [];
//     for (const file of guestFiles) {
//       const filePath = path.join(directoryPath, file);
//       const guest = await readGuests(filePath);
//       if (guest) {
//         allGuests.push(guest);
//       }
//     }

//     printGuests(allGuests);
//   } catch (err) {
//     console.error('Error reading the directory:', err);
//     process.exit(1);
//   }
// }

// main();
