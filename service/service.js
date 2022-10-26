/**
 * Get average tenant income
 * @param {Array<object>} alltenants 
 * @param {string} tenant.salary - the salary of the tenant.
 * @returns number
 */
exports.getAverageSalaray = function (alltenants) {
    let average = 0;
    for (let entry of alltenants) average += parseFloat(entry["salary"]);
    return average / alltenants.length;
};

/**
 * Get Sum of the purchase prices of goods
 * @param {Array<object>} allgoods
 * @param {string} good.price - the price of the good.
 * @returns number
 */
exports.getSumGoodsPrice = function (allgoods) {
    let sum = 0;
    for (let entry of allgoods) sum += parseFloat(entry["price"]);
    return sum;
}