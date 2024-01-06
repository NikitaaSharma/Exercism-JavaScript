// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return (8*ratePerHour);
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  let dayRate = budget/ratePerHour
  return Math.floor(dayRate/8);
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} pricePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discountPercentage: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export const priceWithMonthlyDiscount = function (
  pricePerHour,
  numDays,
  discountPercentage
) {
  // Calculate Price Per Day based on the given price per hour.
  const pricePerDay = dayRate(pricePerHour);

  // Calculate discount to be applied
  const daysInMonth = numDays - (numDays % 22); // every month has 22 billable days
  const discount = pricePerDay * daysInMonth * discountPercentage;

  // Calculate price for days in a month (price - discount)
  const pricePerMonth = daysInMonth * pricePerDay - discount;

  // Calculate price for remaining days
  const priceExceedingDays = numDays % 22 * pricePerDay;

  // Sum Up price for discounted Month + exceeding days
  return Math.ceil(priceExceedingDays + pricePerMonth);
};

