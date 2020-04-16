"use strict";
/**
 *
 * Date: April 16, 2020
 * Problem: Largest product in a grid
 * Description: In the 20×20 grid below, four numbers along a diagonal line have been marked in red.
 *  The product of these numbers is 26 × 63 × 78 × 14 = 1788696.
 * Task: What is the greatest product of four
 *  adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?
 *
 */
exports.__esModule = true;
var data_1 = require("./data");
var largestGridProduct = function (n) {
    var greatestHorizontalProduct = 1, greatestVerticalProduct = 1, greatestDiagonalProduct = 1;
    for (var index = 0; index < data_1.data.length; index++) {
        var helperIndex = void 0;
        var currentHorizontalProduct = 1, currentVerticalProduct = 1;
        for (helperIndex = 0; helperIndex < n; helperIndex++) {
            currentHorizontalProduct *= data_1.data[index][helperIndex];
            currentVerticalProduct *= data_1.data[index][0];
        }
        greatestHorizontalProduct = findGreatest(currentHorizontalProduct, greatestHorizontalProduct);
        greatestVerticalProduct = findGreatest(currentVerticalProduct, greatestVerticalProduct);
    }
    return [greatestHorizontalProduct, greatestVerticalProduct];
};
var findGreatest = function (a, b) { return Math.max(a, b); };
console.log(largestGridProduct(4));
