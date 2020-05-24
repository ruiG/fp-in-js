// FP with JS

import R from "rambda";

// Every function is a single valued collection of pairs

// For the same imput, only one output
// Input -> Output
// Domain -> Range

// 1. Function is Total
// 2. Deterministic
// 3. No observable Side-effects

const add = (x, y) => x + y;

const toPair = (f) => ([x, y]) => f(x, y);

console.log(toPair(add)([1, 2]));

const fromPair = (f) => (x, y) => f([x, y]);

console.log(fromPair(toPair(add))(1, 2));

const flip = (f) => (y, x) => f(x, y);

console.log(flip(add)(1, 2));

const curryM = (f) => (x) => (y) => f(x, y);
const uncurry = (f) => (x, y) => f(x)(y);

const curriedAdd = curryM(add);
const increment = curriedAdd(1);

console.log(increment(2));

// Using curryM

const modulo = curryM((x, y) => y % x);

const isOdd = modulo(2);

const filter = curryM((f, xs) => xs.filter(f));

const getOdds = filter(isOdd);
const result = getOdds([1, 2, 3, 4, 5, 6, 7]);
console.log(result);

// Using Rambda Curry

const replace = R.curry((regex, replacement, str) =>
  str.replace(regex, replacement)
);

const replaceVowels = replace(/[AEIOU]/gi, "!");

console.log(replaceVowels("Hey, we have some words here!"));
