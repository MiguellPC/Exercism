// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const prefix = "NCC-";
  const MIN = 1000
  const MAX = 9999;
  const randomNumber = Math.floor(MIN + Math.random() * (MAX - MIN + 1));
  
  return prefix + randomNumber;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const MIN = 41000.0;
  const MAX = 42000.0;

  return MIN + Math.random() * (MAX - MIN);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planetClasses = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  const MIN = 0;
  const MAX = planetClasses.length;
  const planetClassIndex = Math.floor(MIN + Math.random() * (MAX - MIN));
  
  return planetClasses[planetClassIndex];
  
}
