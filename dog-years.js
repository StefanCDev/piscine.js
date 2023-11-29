function dogYears(planetName, dogAgeInSeconds) {
    // Object with planet-to-dog-year conversion rates
    const planetRates = {
      'earth': 1,
      'mercury': 0.2408467,
      'venus': 0.61519726,
      'mars': 1.8808158,
      'jupiter': 11.862615,
      'saturn': 29.447498,
      'uranus': 84.016846,
      'neptune': 164.79132
    };
    
    // Convert dog age in seconds to years
    const dogAgeInYears = dogAgeInSeconds / (60 * 60 * 24 * 365.25);
    
    // Get the conversion rate for the specified planet
    const conversionRate = planetRates[planetName.toLowerCase()];
    
    // Calculate the dog's age in dog years on the specified planet
    const dogAgeOnPlanet = dogAgeInYears / conversionRate;
    
    // Return the result rounded to two decimal places
    const dogAgeInHumanYears = dogAgeOnPlanet * 7;
    
    return Math.round(dogAgeInHumanYears * 100)/ 100;
  }
  

  // Get the age of a 1,000,000,000-second-old dog on Earth
const ageOnEarth = dogYears('earth', 1000000000);
console.log(ageOnEarth); // Output: 221.82
