/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 * 
 * export function yourFunction(...) {
 *   ...
 * }
 * @param {Number} timer
 */
export function cookingStatus(timer) {
    if (timer === 0) {
        return 'Lasagna is done.';
    } else if (!timer) {
        return 'You forgot to set the timer.';
    }
    return 'Not done, please wait.';
}

/**
 * @param {String[]} layers
 * @param {Number} avgTimer
 */
export function preparationTime(layers, avgTimer) {
    return layers.length * (avgTimer ? avgTimer : 2);
}

/**
 * @param {String[]} layers
 */
export function quantities(layers) {
    const qnt = {
        noodles: 0,
        sauce: 0
    };
    for (const key in layers) {        
        if (layers[key] === 'noodles') {
            qnt['noodles'] += 50;
        }
        if (layers[key] === 'sauce') {
            qnt['sauce'] += 0.2;
        }
    }
    return qnt;
}

/**
 * @param {String[]} friendsList
 * @param {String[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

/**
 * @param {Record<string, number>} recipe
 * @param {Number} portions
 */
export function scaleRecipe(recipe, portions) {
    const recipeScaled = Object.create(recipe);
    for (var prop in recipeScaled) {
        recipeScaled[prop] *= portions / 2;        
    }
    return recipeScaled;
}