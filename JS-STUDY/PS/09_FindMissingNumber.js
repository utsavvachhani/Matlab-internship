function findMissingNumberXOR(arr) {
  let n = arr.length + 1;
  let xor1 = 0, xor2 = 0;

  // XOR all numbers from 1 to n
  for (let i = 1; i <= n; i++) xor1 ^= i;

  // XOR all elements in the array
  for (let num of arr) xor2 ^= num;

  // XOR of both gives the missing number
  return xor1 ^ xor2;
}

console.log(findMissingNumberXOR([1, 2, 3, 5])); 