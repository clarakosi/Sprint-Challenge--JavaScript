/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  elements.forEach((element, i) => {
    cb(element, i);
  });
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const arr = elements.map(cb);
  return arr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let counter = 0;
  return (...value) => {
    if (counter < n) {
      ++counter;
      return cb(...value);
    } 
    return null;
  }
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  let cache = {};
  return (...arg) => {
    if (!(arg in cache)) {
      cache[arg] = cb(arg);
    }
      return cache[arg];
  }
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') return '';
  return reverseStr(str.substr(1)) + str.charAt(0);
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const arr = [];  
  const unnest = (obj) => {
    const keys = Object.keys(obj);    
    keys.forEach((item) => {
      if (typeof obj[item] === 'object' && obj[item] !== null) {
        unnest(obj[item]);
        return;
      }
      arr.push(obj[item]);
    });
  };
  unnest(obj);
  return arr.every(x => x === arr[0]);
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let arr = [];
  elements.forEach((num) => {
    if (Array.isArray(num)) {
      arr = arr.concat(flatten(num));
    } else {
      arr.push(num);
    }
  });
  return arr;
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
