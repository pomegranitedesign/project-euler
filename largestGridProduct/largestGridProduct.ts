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

import { data } from './data'

const largestGridProduct = (n: number): number[] => {
  let greatestHorizontalProduct: number = 1,
    greatestVerticalProduct: number = 1,
    greatestDiagonalProduct: number = 1

  for (let index = 0; index < data.length; index++) {
    let helperIndex: number

    let currentHorizontalProduct: number = 1,
      currentVerticalProduct: number = 1

    for (helperIndex = 0; helperIndex < n; helperIndex++) {
      currentHorizontalProduct *= data[index][helperIndex]
      currentVerticalProduct *= data[index][0]
    }

    greatestHorizontalProduct = findGreatest(
      currentHorizontalProduct,
      greatestHorizontalProduct
    )

    greatestVerticalProduct = findGreatest(
      currentVerticalProduct,
      greatestVerticalProduct
    )
  }

  return [greatestHorizontalProduct, greatestVerticalProduct]
}

const findGreatest = (a: number, b: number): number => Math.max(a, b)

console.log(largestGridProduct(4))
