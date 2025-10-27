function generatePrimes(limit) {
  const primes = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    console.log("---", num)
    for (let i = 2; i * i <= num; i++) {
        console.log(i)
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }
  return primes;
}

console.log(generatePrimes(50)); 
