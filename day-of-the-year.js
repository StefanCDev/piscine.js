function dayOfTheYear(date) {
    let days = 1;
    while (!isFirstofFirst(date)) {
        date.setDate(date.getDate() - 1);
        days++;
    }
    return days;
}

function isFirstofFirst(date) {
    return date.getDate() === 1 && date.getMonth() === 0;
}
// function dayOfTheYear(date) {
//     const startOfYear = new Date(date.getFullYear(), 0, 1); // January 1st of the same year
//     const diffInMs = date.getTime() - startOfYear.getTime(); // Difference in milliseconds
//     const diffInDays = diffInMs / (1000 * 60 * 60 * 24); // Convert milliseconds to days
//     return Math.floor(diffInDays) + 1; // Add 1 to include the first day
//   }
  