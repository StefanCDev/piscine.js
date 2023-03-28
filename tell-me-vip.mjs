const fs = require('fs');
const { join } = require('path');

// Read the list of guests from a file or database.
const guests = [
  { firstname: 'Alice', lastname: 'Smith', response: 'YES' },
  { firstname: 'Bob', lastname: 'Johnson', response: 'NO' },
  { firstname: 'Charlie', lastname: 'Brown', response: 'YES' },
  { firstname: 'David', lastname: 'Davis', response: 'MAYBE' },
];

// Filter the guests who answered 'YES' to the invitation.
const vipGuests = guests.filter(guest => guest.response === 'YES');

// Sort the filtered list in ascending order of the guests' last name.
vipGuests.sort((a, b) => a.lastname.localeCompare(b.lastname));

// Write the sorted list to a file named vip.txt in the given directory path.
async function writeVipGuestsToFile(directoryPath) {
  const fileName = 'vip.txt';
  const filePath = join(directoryPath, fileName);
  const fileStream = fs.createWriteStream(filePath);
  vipGuests.forEach((guest, index) => {
    // Format each line of the file as "Number. Lastname Firstname".
    const line = `${index + 1}. ${guest.lastname} ${guest.firstname}\n`;
    fileStream.write(line);
  });
  fileStream.end();
}

module.exports = { writeVipGuestsToFile };
