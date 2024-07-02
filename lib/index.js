"use strict";

require("core-js/modules/es7.promise.finally.js");
const greet = name => {
  return "Hello there, ".concat(name);
};
console.log(greet("Dinesh"));

// Promise code
async function asyncOps(ms) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("Resolved promise after 1 sec");
    }, ms);
  });
}
const promise = await asyncOps(1000);
Promise.resolve().finally();
