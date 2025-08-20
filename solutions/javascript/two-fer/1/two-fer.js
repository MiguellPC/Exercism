//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
  const phrase = 'One for you, one for me.';
  
  if (name) {
    return phrase.replace('you', name);
  }

  return phrase;
};
