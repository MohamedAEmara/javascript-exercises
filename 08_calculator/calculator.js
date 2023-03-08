const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sumElements = 0;
    let n = array.length;
    for(let i=0; i<n; i++)
    {
      sumElements = parseInt(sumElements) + parseInt(array[i]);
    }  
    sumElements = parseInt(sumElements);
    return sumElements;
};

const multiply = function(array) {
  let res = 1;
  let n = array.length;
  for(let i=0; i<n; i++) {
    res = parseInt(res) * parseInt(array[i]);
  }
  res = parseInt(res);
  return res;
};

const power = function(a, b) {
	return parseInt(Math.pow(a, b));
};

const factorial = function(n) {
	let res = 1;
  for(let i=1; i<=n; i++)
    res = parseInt(res) * parseInt(i);
  
  res = parseInt(res);
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
