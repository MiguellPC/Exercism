/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const pizzaType = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10
  };

  const extraOptions = {
    ExtraSauce: 1,
    ExtraToppings: 2
  };

  return pizzaType[pizza] + (extras ? extras.reduce((acc, extra) => extraOptions[extra] + acc, 0) : 0);
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((acc, order) => pizzaPrice(order.pizza, ...order.extras) + acc, 0)
}
