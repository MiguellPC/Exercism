// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { time } from "console";

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time = 0;
  switch (name) {
    case 'Pure Strawberry Joy':
      return time = 0.5;
    case 'Energizer':
    case 'Green Garden':
      return time = 1.5;
    case 'Tropical Island':
      return time = 3;
    case 'All or Nothing':
      return time = 5;  
    default:
      return time = 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const small = 6;
  const medium = 8;
  const large = 10;
  let toCut = 0;
  let limesCount = 0;
  let i = 0;
  while (wedgesNeeded !== 0 && toCut <= wedgesNeeded && i < limes.length) {
   switch (limes[i]) {
    case 'small':
      toCut += small;
      limesCount++;
      break;
    case 'medium':
      toCut += medium;
      limesCount++;
      break;
    case 'large':
      toCut += large;
      limesCount++;
      break;   
    default:
      break;
   }
   i++;
  }
  return limesCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}
