import { readFile } from 'fs/promises';
import { join } from 'path';

// Define the path to the invitation response JSON file
const invitationResponsePath = join(__dirname, 'invitationResponse.json');

// Define the path to the output file for VIP guests
const vipListPath = join(__dirname, 'vip.txt');

// Read the invitation response file
readFile(invitationResponsePath, 'utf8')
  .then((data) => {
    // Parse the JSON data from the invitation response
    const invitationResponse = JSON.parse(data);

    // Filter guests who responded 'YES' to the invitation
    const vipGuests = invitationResponse.guests.filter((guest) => guest.response === 'YES');

    // Sort the VIP guests in ascending alphabetic order by last name
    vipGuests.sort((a, b) => a.lastname.localeCompare(b.lastname));

    // Generate the formatted list of VIP guests
    const vipList = vipGuests.map((guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}`).join('\n');

    // Write the VIP list to the output file
    return writeFile(vipListPath, vipList, 'utf8');
  })
  .then(() => {
    console.log('VIP list saved to vip.txt');
  })
  .catch((error) => {
    console.error(error);
  });

