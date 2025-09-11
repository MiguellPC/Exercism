//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const orbitalPeriod = {
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'earth': 1.0,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132
};

function secondsToYear(time) {
  return time / 60 / 60 / 24 / 365.25;
}

export const age = (planet, seconds) => {
  if (planet in orbitalPeriod) {
    const result = (secondsToYear(seconds) / orbitalPeriod[planet]).toFixed(2);
    
    return Number(result);        
  }
    
  throw new Error('not a planet');  
};
