function rotateArray(arr, k, direction = 'right') {
  k = k % arr.length;
  if (direction === 'left') {
    return arr.slice(k).concat(arr.slice(0, k));
  } else {
    return arr.slice(-k).concat(arr.slice(0, -k));
  }
}

console.log(rotateArray([1, 2, 3, 4, 5], 2, 'left'));  
console.log(rotateArray([1, 2, 3, 4, 5], 2, 'right')); 