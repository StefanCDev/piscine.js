



  // Using the spread operator to create shallow copies
  const clone1 = { ...person };
  const clone2 = { ...person };
  
  // Using object references to point to the original object
  const samePerson = person;
  
  // Modifying the original object
  person.age += 1;
  person.country = 'FR';
  
  console.log('Original person:', person);
  console.log('Clone 1:', clone1);
  console.log('Clone 2:', clone2);
  console.log('Same person:', samePerson);
  